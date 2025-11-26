// Global State
let currentChapterKey = null;
let currentQuestions = [];
let currentQuestionIndex = 0;
let questionStatus = []; // 0=Not Visited, 1=Skipped, 2=Correct, 3=Incorrect, 4=Review

// DOM Elements
const chapterListEl = document.getElementById('chapter-list');
const questionNumEl = document.getElementById('question-num');
const questionTextEl = document.getElementById('question-text');
const answerSectionEl = document.getElementById('answer-section');
const answerTextEl = document.getElementById('answer-text');
const conceptTextEl = document.getElementById('concept-text');
const paletteContainer = document.getElementById('palette-container');
const timerEl = document.getElementById('timer');
// KaTeX readiness helper
let katexReadyFlag = false;
function whenKatexReady(cb) {
    if (typeof window.renderMathInElement === 'function') {
        katexReadyFlag = true;
        cb();
    } else {
        // Retry a few times while KaTeX (defer) loads
        let tries = 0;
        const maxTries = 20; // ~2s at 100ms
        const handle = setInterval(() => {
            tries++;
            if (typeof window.renderMathInElement === 'function') {
                katexReadyFlag = true;
                clearInterval(handle);
                cb();
            } else if (tries >= maxTries) {
                clearInterval(handle);
            }
        }, 100);
    }
}

// Timer
let seconds = 0;
setInterval(() => {
    seconds++;
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    timerEl.textContent = `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}, 1000);

// Initialize
function init() {
    renderChapterList();
    
    // Load first chapter by default or from saved state
    const savedState = loadProgress();
    if (savedState && savedState.lastChapter && questionDatabase[savedState.lastChapter]) {
        loadChapter(savedState.lastChapter);
    } else {
        // Default to first chapter
        const firstChapter = Object.keys(questionDatabase)[0];
        if (firstChapter) loadChapter(firstChapter);
    }
}

// --- Math preprocessing and rendering ---
function preprocessMath(text) {
    if (!text) return '';
    let t = text;
    // Repair common ASCII arrows to TeX
    t = t.replace(/=>/g, '$\\Rightarrow$').replace(/->/g, '$\\to$');
    // Normalize subscripts: a_ij, x_i -> a_{ij}, x_{i} (no $ here to avoid nested $)
    t = t.replace(/\b([A-Za-z])_\{?([A-Za-z0-9]+)\}?\b/g, function(match, base, sub){
        return base + '_{' + sub + '}';
    });
    // Normalize superscripts: x^2, a^(n) -> x^{2}, a^{n} (no $ here)
    t = t.replace(/\b([A-Za-z])\^(\d+)\b/g, function(match, base, exp){
        return base + '^{' + exp + '}';
    });
    t = t.replace(/\b([A-Za-z])\^\(([^\)]+)\)/g, function(match, base, exp){
        return base + '^{' + exp + '}';
    });
    // Integral with division: ∫ dx/(x^2+1) -> $\int \frac{dx}{x^2+1}$
    t = t.replace(/∫\s*([^\s\/]*)\s*\/\(([^\)]+)\)/g, function(match, numer, denom){
        const nRaw = numer && numer.length ? numer.trim() : 'dx';
        const dRaw = denom.trim();
        // Strip any stray $ from captured parts to avoid nested math delimiters
        const n = nRaw.replace(/\$/g, '');
        const d = dRaw.replace(/\$/g, '');
        return '$\\int \\frac{' + n + '}{' + d + '}$';
    });
    // Generic fraction a/(b) -> $\frac{a}{b}$ (avoid URLs)
    t = t.replace(/\b([A-Za-z0-9]+)\s*\/\(([^\)]+)\)/g, function(match, numer, denom){
        const n = numer.replace(/\$/g, '');
        const d = denom.replace(/\$/g, '');
        return '$\\frac{' + n + '}{' + d + '}$';
    });
    // Ensure common sets render: ℝ, ℤ -> \mathbb
    t = t.replace(/\bR\b/g, '$\\mathbb{R}$').replace(/\bZ\b/g, '$\\mathbb{Z}$');
    return t;
}

function renderMathIn(el) {
    if (!el) return;
    const doRender = () => {
        window.renderMathInElement(el, {
            delimiters: [
                {left: '$', right: '$', display: false},
                {left: '$$', right: '$$', display: true}
            ],
            throwOnError: false
        });
    };
    whenKatexReady(doRender);
}

// Render Chapter List
function renderChapterList() {
    chapterListEl.innerHTML = '';
    Object.keys(questionDatabase).forEach(key => {
        const li = document.createElement('li');
        li.textContent = questionDatabase[key].title;
        li.onclick = () => loadChapter(key);
        if (key === currentChapterKey) {
            li.classList.add('active');
        }
        chapterListEl.appendChild(li);
    });
}

// Load Chapter
function loadChapter(key) {
    if (currentChapterKey === key) return; // Already loaded

    currentChapterKey = key;
    currentQuestions = questionDatabase[key].questions;
    
    // Update UI for active chapter
    Array.from(chapterListEl.children).forEach(li => {
        if (li.textContent === questionDatabase[key].title) li.classList.add('active');
        else li.classList.remove('active');
    });

    // Load Progress for this chapter
    const savedState = loadProgress();
    if (savedState && savedState.chapters && savedState.chapters[key]) {
        questionStatus = savedState.chapters[key].status;
        currentQuestionIndex = savedState.chapters[key].currentIndex || 0;
    } else {
        // Initialize new status array
        questionStatus = new Array(currentQuestions.length).fill(0);
        currentQuestionIndex = 0;
    }

    // Ensure status array matches question length (in case questions were added)
    if (questionStatus.length !== currentQuestions.length) {
        const oldStatus = questionStatus;
        questionStatus = new Array(currentQuestions.length).fill(0);
        for(let i=0; i<Math.min(oldStatus.length, questionStatus.length); i++) {
            questionStatus[i] = oldStatus[i];
        }
    }

    renderPalette();
    loadQuestion(currentQuestionIndex);
}

// Load Question
function loadQuestion(index) {
    currentQuestionIndex = index;
    
    // Update UI
    questionNumEl.textContent = `Question ${currentQuestions[index].id}`;
    questionTextEl.innerHTML = preprocessMath(currentQuestions[index].question);
    
    // Reset Answer View
    answerSectionEl.classList.remove('visible');
    answerTextEl.innerHTML = preprocessMath(currentQuestions[index].answer);
    conceptTextEl.innerHTML = preprocessMath(currentQuestions[index].concept);

    // Reset Buttons
    document.getElementById('btn-show').classList.remove('hidden');
    document.getElementById('btn-correct').classList.add('hidden');
    document.getElementById('btn-incorrect').classList.add('hidden');

    // Update Palette Highlight
    updatePaletteHighlight();

    // Render math in updated sections (wait for KaTeX if needed)
    renderMathIn(questionTextEl);
    renderMathIn(answerTextEl);
    renderMathIn(conceptTextEl);
    
    // Save current position
    saveProgress();
}

// Show Answer
function toggleAnswer() {
    answerSectionEl.classList.add('visible');
    document.getElementById('btn-show').classList.add('hidden');
    document.getElementById('btn-correct').classList.remove('hidden');
    document.getElementById('btn-incorrect').classList.remove('hidden');
}

// Navigation / Status Functions
function handleStatus(status) {
    // Update status of current question
    questionStatus[currentQuestionIndex] = status;
    
    // Update Palette
    renderPalette(); 
    
    // Save Progress
    saveProgress();

    // Move to next question if available
    if (currentQuestionIndex < currentQuestions.length - 1) {
        loadQuestion(currentQuestionIndex + 1);
    } else {
        alert("End of questions for this chapter!");
    }
}

function handleBack() {
    if (currentQuestionIndex > 0) {
        loadQuestion(currentQuestionIndex - 1);
    }
}

// Palette Rendering
function renderPalette() {
    paletteContainer.innerHTML = '';
    currentQuestions.forEach((q, index) => {
        const btn = document.createElement('div');
        btn.className = 'palette-btn';
        btn.textContent = q.id;
        
        // Apply classes based on status
        switch(questionStatus[index]) {
            case 0: btn.classList.add('status-not-visited'); break;
            case 1: btn.classList.add('status-skipped'); break;
            case 2: btn.classList.add('status-correct'); break;
            case 3: btn.classList.add('status-incorrect'); break;
            case 4: btn.classList.add('status-review'); break;
        }

        if (index === currentQuestionIndex) {
            btn.classList.add('active');
        }

        btn.onclick = () => loadQuestion(index);
        paletteContainer.appendChild(btn);
    });
}

function updatePaletteHighlight() {
    const buttons = paletteContainer.children;
    for (let i = 0; i < buttons.length; i++) {
        if (i === currentQuestionIndex) {
            buttons[i].classList.add('active');
        } else {
            buttons[i].classList.remove('active');
        }
    }
}

// Local Storage Functions
function saveProgress() {
    const state = loadProgress() || { chapters: {} };
    state.lastChapter = currentChapterKey;
    state.chapters[currentChapterKey] = {
        status: questionStatus,
        currentIndex: currentQuestionIndex
    };
    localStorage.setItem('viva_project_progress', JSON.stringify(state));
}

function loadProgress() {
    const stored = localStorage.getItem('viva_project_progress');
    return stored ? JSON.parse(stored) : null;
}

// Event Listeners
document.getElementById('btn-show').addEventListener('click', toggleAnswer);
document.getElementById('btn-correct').addEventListener('click', () => handleStatus(2));
document.getElementById('btn-incorrect').addEventListener('click', () => handleStatus(3));
document.getElementById('btn-skip').addEventListener('click', () => handleStatus(1));
document.getElementById('btn-review').addEventListener('click', () => handleStatus(4));
document.getElementById('btn-back').addEventListener('click', handleBack);

// Mobile Toggle Logic
const mobileChapterBtn = document.getElementById('mobile-chapter-btn');
const mobilePaletteBtn = document.getElementById('mobile-palette-btn');
const chapterSidebar = document.querySelector('.chapter-sidebar');
const paletteSidebar = document.querySelector('.sidebar');
const mobileOverlay = document.getElementById('mobile-overlay');

function closeAllSidebars() {
    chapterSidebar.classList.remove('active');
    paletteSidebar.classList.remove('active');
    mobileOverlay.classList.remove('active');
}

if (mobileChapterBtn) {
    mobileChapterBtn.addEventListener('click', () => {
        const isActive = chapterSidebar.classList.contains('active');
        closeAllSidebars();
        if (!isActive) {
            chapterSidebar.classList.add('active');
            mobileOverlay.classList.add('active');
        }
    });
}

if (mobilePaletteBtn) {
    mobilePaletteBtn.addEventListener('click', () => {
        const isActive = paletteSidebar.classList.contains('active');
        closeAllSidebars();
        if (!isActive) {
            paletteSidebar.classList.add('active');
            mobileOverlay.classList.add('active');
        }
    });
}

if (mobileOverlay) {
    mobileOverlay.addEventListener('click', closeAllSidebars);
}

// Close sidebar when clicking a chapter item on mobile
chapterListEl.addEventListener('click', (e) => {
    if (window.innerWidth <= 768 && e.target.tagName === 'LI') {
        closeAllSidebars();
    }
});

// Close sidebar when clicking a palette item on mobile
paletteContainer.addEventListener('click', (e) => {
    if (window.innerWidth <= 768 && (e.target.classList.contains('palette-btn'))) {
        closeAllSidebars();
    }
});

// Start
init();
