const questionDatabase = {
    "matrices": {
        title: "Matrices & Determinants",
        questions: [
    // --- MATRICES: BASICS & TYPES ---
    {
        id: 1,
        question: "What is a Matrix?",
        answer: "A rectangular arrangement of numbers (real or complex) enclosed by [ ] or ( ), having m rows and n columns.",
        concept: "Matrix Definition: A = [a_ij]_{m×n} where a_ij is the element in i-th row and j-th column."
    },
    {
        id: 2,
        question: "What is the Order of a Matrix?",
        answer: "If a matrix has m rows and n columns, its order is m × n.",
        concept: "Order of Matrix: Number of rows × Number of columns."
    },
    {
        id: 3,
        question: "If a matrix has 12 elements, what are all the possible orders?",
        answer: "1×12, 12×1, 2×6, 6×2, 3×4, 4×3",
        concept: "Order of Matrix: If a matrix has mn elements, order can be any pair of natural numbers whose product is mn."
    },
    {
        id: 4,
        question: "What is a Row Matrix?",
        answer: "A matrix having only one row and any number of columns (order 1×n).",
        concept: "Types of Matrices: Example: [1, 2, 3] is a 1×3 row matrix."
    },
    {
        id: 5,
        question: "What is a Column Matrix?",
        answer: "A matrix having only one column and any number of rows (order m×1).",
        concept: "Types of Matrices: Example: [1; 2; 3] is a 3×1 column matrix."
    },
    {
        id: 6,
        question: "What is a Null/Zero Matrix?",
        answer: "A matrix of any order having all its elements equal to zero (a_ij = 0 for all i, j).",
        concept: "Zero Matrix: Denoted by O. Acts as additive identity."
    },
    {
        id: 7,
        question: "What is a Square Matrix?",
        answer: "A matrix of order m × n where m = n (number of rows equals number of columns).",
        concept: "Square Matrix: Has n² elements for order n×n."
    },
    {
        id: 8,
        question: "What is a Diagonal Matrix?",
        answer: "A square matrix where all non-diagonal elements are zero (a_ij = 0 for i ≠ j).",
        concept: "Diagonal Matrix: Represented as A = diag[a₁₁, a₂₂, ..., a_nn]."
    },
    {
        id: 9,
        question: "What is a Scalar Matrix?",
        answer: "A diagonal matrix where all diagonal elements are equal (a_ij = 0 for i≠j and a_ii = k for all i).",
        concept: "Scalar Matrix: Special case of diagonal matrix. Example: kI where k is a scalar."
    },
    {
        id: 10,
        question: "What is a Unit/Identity Matrix?",
        answer: "A square matrix where every diagonal element is 1 and every non-diagonal element is 0.",
        concept: "Identity Matrix: Denoted by I. a_ij = 1 if i=j, 0 if i≠j. AI = IA = A."
    },
    {
        id: 11,
        question: "What is a Rectangular Matrix?",
        answer: "A matrix of order m × n where m ≠ n.",
        concept: "Rectangular Matrix: Number of rows is not equal to number of columns."
    },
    {
        id: 12,
        question: "What is a Horizontal Matrix?",
        answer: "A matrix where the number of rows is less than the number of columns (m < n).",
        concept: "Horizontal Matrix: More columns than rows."
    },
    {
        id: 13,
        question: "What is a Vertical Matrix?",
        answer: "A matrix where the number of rows is greater than the number of columns (m > n).",
        concept: "Vertical Matrix: More rows than columns."
    },
    {
        id: 14,
        question: "What is an Upper Triangular Matrix?",
        answer: "A square matrix where all elements below the principal diagonal are zero (a_ij = 0 for i > j).",
        concept: "Upper Triangular: Non-zero elements only on and above the main diagonal."
    },
    {
        id: 15,
        question: "What is a Lower Triangular Matrix?",
        answer: "A square matrix where all elements above the principal diagonal are zero (a_ij = 0 for i < j).",
        concept: "Lower Triangular: Non-zero elements only on and below the main diagonal."
    },
    {
        id: 16,
        question: "What is the Principal Diagonal of a Matrix?",
        answer: "The diagonal from the first element of the first row to the last element of the last row (elements a₁₁, a₂₂, ..., a_nn).",
        concept: "Principal/Main Diagonal: Also called leading diagonal."
    },
    {
        id: 17,
        question: "When are two matrices said to be Equal?",
        answer: "If they have the same order AND their corresponding elements are equal (a_ij = b_ij for all i, j).",
        concept: "Equality of Matrices: Both order and all elements must match."
    },
    {
        id: 18,
        question: "What is a Submatrix?",
        answer: "A matrix obtained from a given matrix by deleting any number of rows or columns or both.",
        concept: "Submatrix: Used in finding minors and cofactors."
    },

    // --- ALGEBRA OF MATRICES ---
    {
        id: 19,
        question: "What is the condition for addition of two matrices?",
        answer: "Both matrices must have the same order.",
        concept: "Matrix Addition: If A and B are both m×n, then A + B = [a_ij + b_ij]_{m×n}."
    },
    {
        id: 20,
        question: "State the Commutative Law of matrix addition.",
        answer: "A + B = B + A",
        concept: "Properties of Addition: Order of addition doesn't matter."
    },
    {
        id: 21,
        question: "State the Associative Law of matrix addition.",
        answer: "(A + B) + C = A + (B + C)",
        concept: "Properties of Addition: Grouping doesn't affect the result."
    },
    {
        id: 22,
        question: "What is the Additive Identity for matrices?",
        answer: "The Zero Matrix O of the same order, such that A + O = A.",
        concept: "Additive Identity: O is the identity element for matrix addition."
    },
    {
        id: 23,
        question: "What is the Additive Inverse of a matrix A?",
        answer: "-A, such that A + (-A) = O.",
        concept: "Additive Inverse: The matrix with all elements negated."
    },
    {
        id: 24,
        question: "How is scalar multiplication of a matrix defined?",
        answer: "kA = [ka_ij]_{m×n}, where each element is multiplied by scalar k.",
        concept: "Scalar Multiplication: Every element is multiplied by the scalar."
    },
    {
        id: 25,
        question: "State the distributive property: k(A + B) = ?",
        answer: "k(A + B) = kA + kB",
        concept: "Properties of Scalar Multiplication: Scalar distributes over matrix addition."
    },
    {
        id: 26,
        question: "State the property: (k₁ + k₂)A = ?",
        answer: "(k₁ + k₂)A = k₁A + k₂A",
        concept: "Properties of Scalar Multiplication: Sum of scalars distributes."
    },
    {
        id: 27,
        question: "State the property: k₁(k₂A) = ?",
        answer: "k₁(k₂A) = (k₁k₂)A = k₂(k₁A)",
        concept: "Properties of Scalar Multiplication: Scalar multiplication is associative."
    },
    {
        id: 28,
        question: "What is the condition for multiplication of matrices A and B (AB)?",
        answer: "Number of columns of A must equal number of rows of B.",
        concept: "Matrix Multiplication: If A is m×n and B is n×p, then AB is m×p."
    },
    {
        id: 29,
        question: "How is the element c_ij of product matrix C = AB calculated?",
        answer: "c_ij = Σ(k=1 to n) a_ik × b_kj (sum of products of i-th row of A and j-th column of B).",
        concept: "Matrix Multiplication: Row-column multiplication rule."
    },
    {
        id: 30,
        question: "Is matrix multiplication commutative?",
        answer: "No, in general AB ≠ BA. It is commutative only for special cases like diagonal matrices of same order.",
        concept: "Non-commutativity: This is a fundamental property of matrix multiplication."
    },
    {
        id: 31,
        question: "State the Associative Law for matrix multiplication.",
        answer: "(AB)C = A(BC)",
        concept: "Properties of Multiplication: Grouping doesn't affect the product."
    },
    {
        id: 32,
        question: "State the Distributive Law for matrices.",
        answer: "A(B + C) = AB + AC and (A + B)C = AC + BC",
        concept: "Distributive Property: Multiplication distributes over addition."
    },
    {
        id: 33,
        question: "What is the Multiplicative Identity for matrices?",
        answer: "The Identity Matrix I, such that AI = IA = A.",
        concept: "Multiplicative Identity: I is the identity element for matrix multiplication."
    },
    {
        id: 34,
        question: "If AB = O, does it mean A = O or B = O?",
        answer: "No, two non-zero matrices can have a zero product.",
        concept: "Zero Divisors: Example: [1,0;0,0] × [0,0;0,1] = [0,0;0,0]."
    },
    {
        id: 35,
        question: "What is A^(n+1) in terms of A^n?",
        answer: "A^(n+1) = A^n × A",
        concept: "Positive Integral Powers: Defined for square matrices."
    },
    {
        id: 36,
        question: "What is A^m × A^n equal to?",
        answer: "A^(m+n)",
        concept: "Laws of Exponents for Matrices: Powers add when multiplying."
    },
    {
        id: 37,
        question: "What is (A^m)^n equal to?",
        answer: "A^(mn)",
        concept: "Laws of Exponents for Matrices: Powers multiply when raising to a power."
    },

    // --- TRANSPOSE ---
    {
        id: 38,
        question: "What is the Transpose of a matrix A?",
        answer: "The matrix A' (or A^T) obtained by interchanging rows and columns of A.",
        concept: "Transpose: If A is m×n, A' is n×m where (A')_ij = a_ji."
    },
    {
        id: 39,
        question: "What is (A')' equal to?",
        answer: "A (the original matrix).",
        concept: "Property of Transpose: Transpose of transpose is the original matrix."
    },
    {
        id: 40,
        question: "What is (A + B)' equal to?",
        answer: "A' + B'",
        concept: "Property of Transpose: Transpose distributes over addition."
    },
    {
        id: 41,
        question: "What is (kA)' equal to?",
        answer: "kA'",
        concept: "Property of Transpose: Scalar multiplication commutes with transpose."
    },
    {
        id: 42,
        question: "What is (AB)' equal to?",
        answer: "B'A' (Reversal Law)",
        concept: "Reversal Law of Transpose: Order reverses when transposing a product."
    },
    {
        id: 43,
        question: "What is (ABC)' equal to?",
        answer: "C'B'A'",
        concept: "Extended Reversal Law: Order completely reverses for any number of matrices."
    },
    {
        id: 44,
        question: "What is (A^n)' equal to?",
        answer: "(A')^n",
        concept: "Property of Transpose: Power can be moved outside or applied to transpose."
    },

    // --- SYMMETRIC & SKEW-SYMMETRIC ---
    {
        id: 45,
        question: "Define a Symmetric Matrix.",
        answer: "A square matrix A where A' = A (i.e., a_ij = a_ji for all i, j).",
        concept: "Symmetric Matrix: Elements are symmetric about the principal diagonal."
    },
    {
        id: 46,
        question: "Define a Skew-Symmetric Matrix.",
        answer: "A square matrix A where A' = -A (i.e., a_ij = -a_ji for all i, j).",
        concept: "Skew-Symmetric Matrix: a_ij = -a_ji implies elements across diagonal are negatives."
    },
    {
        id: 47,
        question: "What are the diagonal elements of a skew-symmetric matrix?",
        answer: "All zero (a_ii = 0 for all i).",
        concept: "Property: Since a_ii = -a_ii, we get 2a_ii = 0, so a_ii = 0."
    },
    {
        id: 48,
        question: "If A is any square matrix, what type is A + A'?",
        answer: "Symmetric matrix.",
        concept: "Theorem: (A + A')' = A' + A = A + A', hence symmetric."
    },
    {
        id: 49,
        question: "If A is any square matrix, what type is A - A'?",
        answer: "Skew-symmetric matrix.",
        concept: "Theorem: (A - A')' = A' - A = -(A - A'), hence skew-symmetric."
    },
    {
        id: 50,
        question: "Express any square matrix as sum of symmetric and skew-symmetric matrices.",
        answer: "A = (1/2)(A + A') + (1/2)(A - A')",
        concept: "Decomposition Theorem: Every square matrix can be uniquely expressed this way."
    },
    {
        id: 51,
        question: "If A and B are symmetric matrices, is A + B symmetric?",
        answer: "Yes.",
        concept: "Property: Sum of symmetric matrices of same order is symmetric."
    },
    {
        id: 52,
        question: "If A and B are symmetric matrices, when is AB symmetric?",
        answer: "Only when AB = BA (matrices commute).",
        concept: "Property: (AB)' = B'A' = BA. For symmetry, need BA = AB."
    },
    {
        id: 53,
        question: "If A and B are symmetric, what type is AB - BA?",
        answer: "Skew-symmetric.",
        concept: "Property: (AB - BA)' = B'A' - A'B' = BA - AB = -(AB - BA)."
    },
    {
        id: 54,
        question: "If A and B are symmetric, what type is AB + BA?",
        answer: "Symmetric.",
        concept: "Property: (AB + BA)' = BA + AB = AB + BA."
    },
    {
        id: 55,
        question: "For a square matrix A, are AA' and A'A symmetric?",
        answer: "Yes, both are symmetric.",
        concept: "Property: (AA')' = (A')'A' = AA', and similarly for A'A."
    },

    // --- SPECIAL MATRICES ---
    {
        id: 56,
        question: "What is a Singular Matrix?",
        answer: "A square matrix whose determinant is zero (|A| = 0).",
        concept: "Singular Matrix: Not invertible. det(A) = 0."
    },
    {
        id: 57,
        question: "What is a Non-Singular Matrix?",
        answer: "A square matrix whose determinant is non-zero (|A| ≠ 0).",
        concept: "Non-Singular Matrix: Invertible. Has a unique inverse."
    },
    {
        id: 58,
        question: "What is an Orthogonal Matrix?",
        answer: "A square matrix A where AA' = A'A = I.",
        concept: "Orthogonal Matrix: A' = A⁻¹. Columns (and rows) form orthonormal sets."
    },
    {
        id: 59,
        question: "What is the determinant of an orthogonal matrix?",
        answer: "|A| = ±1",
        concept: "Property: |AA'| = |I| ⇒ |A||A'| = 1 ⇒ |A|² = 1 ⇒ |A| = ±1."
    },
    {
        id: 60,
        question: "What is an Idempotent Matrix?",
        answer: "A square matrix A where A² = A.",
        concept: "Idempotent Matrix: Multiplying by itself gives the same matrix."
    },
    {
        id: 61,
        question: "What is an Involutory Matrix?",
        answer: "A square matrix A where A² = I.",
        concept: "Involutory Matrix: A is its own inverse (A⁻¹ = A)."
    },
    {
        id: 62,
        question: "What is a Nilpotent Matrix?",
        answer: "A square matrix A where A^m = O for some positive integer m.",
        concept: "Nilpotent Matrix: The smallest such m is called the index of nilpotency."
    },
    {
        id: 63,
        question: "What is a Unitary Matrix?",
        answer: "A square matrix A (with complex entries) where A'̄A = I (conjugate transpose times A equals I).",
        concept: "Unitary Matrix: A^θ A = I where A^θ is transpose conjugate."
    },
    {
        id: 64,
        question: "What is a Periodic Matrix?",
        answer: "A matrix A where A^(k+1) = A for some positive integer k.",
        concept: "Periodic Matrix: k is called the period of matrix A."
    },

    // --- TRACE ---
    {
        id: 65,
        question: "What is the Trace of a Matrix?",
        answer: "The sum of all diagonal elements of a square matrix: tr(A) = Σa_ii.",
        concept: "Trace: Only defined for square matrices."
    },
    {
        id: 66,
        question: "What is tr(A + B)?",
        answer: "tr(A) + tr(B)",
        concept: "Property of Trace: Trace of sum equals sum of traces."
    },
    {
        id: 67,
        question: "What is tr(kA)?",
        answer: "k × tr(A)",
        concept: "Property of Trace: Scalar factors out of trace."
    },
    {
        id: 68,
        question: "What is tr(A')?",
        answer: "tr(A) (same as original)",
        concept: "Property of Trace: Trace is unchanged by transpose."
    },
    {
        id: 69,
        question: "What is tr(I_n) for an n×n identity matrix?",
        answer: "n",
        concept: "Property of Trace: Sum of n ones equals n."
    },
    {
        id: 70,
        question: "Is tr(AB) = tr(A) × tr(B)?",
        answer: "No, in general tr(AB) ≠ tr(A) × tr(B).",
        concept: "Property of Trace: However, tr(AB) = tr(BA)."
    },

    // --- CONJUGATE & TRANSPOSE CONJUGATE ---
    {
        id: 71,
        question: "What is the Conjugate of a Matrix A?",
        answer: "The matrix Ā obtained by replacing each element by its complex conjugate.",
        concept: "Conjugate: If A has complex elements a_ij, then Ā has elements ā_ij."
    },
    {
        id: 72,
        question: "What is (Ā̄) equal to?",
        answer: "A (double conjugate returns original)",
        concept: "Property of Conjugate: Conjugate of conjugate is original."
    },
    {
        id: 73,
        question: "What is the Transpose Conjugate (A^θ or A*)?",
        answer: "The transpose of the conjugate of A: A^θ = (Ā)' = (A')̄.",
        concept: "Transpose Conjugate: Also called Hermitian conjugate."
    },

    // --- ELEMENTARY OPERATIONS ---
    {
        id: 74,
        question: "What are the three types of Elementary Row Operations?",
        answer: "(i) Interchange two rows (R_i ↔ R_j), (ii) Multiply a row by non-zero scalar (R_i → kR_i), (iii) Add multiple of one row to another (R_i → R_i + kR_j).",
        concept: "Elementary Operations: Same operations apply to columns (C_i)."
    },
    {
        id: 75,
        question: "What is an Elementary Matrix?",
        answer: "A matrix obtained from an identity matrix by a single elementary operation.",
        concept: "Elementary Matrix: Used in finding inverse by row reduction."
    },
    {
        id: 76,
        question: "When are two matrices said to be Equivalent?",
        answer: "If one can be obtained from the other by a sequence of elementary transformations.",
        concept: "Equivalent Matrices: Denoted by A ~ B."
    },

    // --- INVERSE ---
    {
        id: 77,
        question: "When is a matrix A said to be Invertible?",
        answer: "If there exists a matrix B such that AB = BA = I.",
        concept: "Invertible Matrix: Only square non-singular matrices are invertible."
    },
    {
        id: 78,
        question: "Is the inverse of a matrix unique?",
        answer: "Yes, if it exists, it is unique.",
        concept: "Uniqueness of Inverse: Proved by assuming two inverses and showing they're equal."
    },
    {
        id: 79,
        question: "What is (A⁻¹)⁻¹ equal to?",
        answer: "A",
        concept: "Property of Inverse: Inverse of inverse is original."
    },
    {
        id: 80,
        question: "What is (AB)⁻¹ equal to?",
        answer: "B⁻¹A⁻¹ (Reversal Law)",
        concept: "Reversal Law of Inverse: Order reverses for inverse of product."
    },
    {
        id: 81,
        question: "What is (A')⁻¹ equal to?",
        answer: "(A⁻¹)'",
        concept: "Property: Inverse and transpose operations can be interchanged."
    },
    {
        id: 82,
        question: "What is the inverse formula using adjoint?",
        answer: "A⁻¹ = (1/|A|) × adj(A), provided |A| ≠ 0.",
        concept: "Inverse Formula: Fundamental formula connecting inverse, determinant, and adjoint."
    },

    // --- DETERMINANTS ---
    {
        id: 83,
        question: "What is a Determinant?",
        answer: "A unique scalar value associated with every square matrix.",
        concept: "Determinant: Denoted |A| or det(A). Only defined for square matrices."
    },
    {
        id: 84,
        question: "What is the determinant of a 2×2 matrix [[a,b],[c,d]]?",
        answer: "ad - bc",
        concept: "2×2 Determinant: Product of main diagonal minus product of other diagonal."
    },
    {
        id: 85,
        question: "Define the Minor M_ij of element a_ij.",
        answer: "The determinant of the submatrix obtained by deleting the i-th row and j-th column.",
        concept: "Minor: Used in calculating cofactors and expansion."
    },
    {
        id: 86,
        question: "Define the Cofactor C_ij of element a_ij.",
        answer: "C_ij = (-1)^(i+j) × M_ij (signed minor).",
        concept: "Cofactor: Sign pattern follows checkerboard: +,-,+,... for row 1."
    },
    {
        id: 87,
        question: "How do you expand a determinant along a row?",
        answer: "|A| = Σ a_ij × C_ij for any row i (sum of element × its cofactor).",
        concept: "Expansion by Row: Can expand along any row or column."
    },
    {
        id: 88,
        question: "What is |A'| equal to?",
        answer: "|A| (determinant of transpose equals determinant).",
        concept: "Property of Determinants: Transpose doesn't change determinant value."
    },
    {
        id: 89,
        question: "What happens to |A| if two rows are interchanged?",
        answer: "The sign changes (|A| becomes -|A|).",
        concept: "Property of Determinants: Row/column interchange negates determinant."
    },
    {
        id: 90,
        question: "What is |A| if two rows are identical?",
        answer: "Zero.",
        concept: "Property of Determinants: Identical rows (or columns) make det = 0."
    },
    {
        id: 91,
        question: "What is |kA| for an n×n matrix A?",
        answer: "k^n × |A|",
        concept: "Property: Each row multiplied by k, and there are n rows."
    },
    {
        id: 92,
        question: "Does adding a multiple of one row to another change |A|?",
        answer: "No, the determinant remains unchanged.",
        concept: "Property: R_i → R_i + kR_j doesn't change determinant."
    },
    {
        id: 93,
        question: "What is |AB| equal to?",
        answer: "|A| × |B|",
        concept: "Multiplicative Property: Determinant of product equals product of determinants."
    },
    {
        id: 94,
        question: "What is the determinant of a triangular matrix?",
        answer: "The product of its diagonal elements.",
        concept: "Property: Both upper and lower triangular matrices."
    },
    {
        id: 95,
        question: "What is |I| for identity matrix?",
        answer: "1",
        concept: "Property: Determinant of identity matrix is always 1."
    },
    {
        id: 96,
        question: "What is |A⁻¹| if A is invertible?",
        answer: "1/|A|",
        concept: "Property: |AA⁻¹| = |I| = 1, so |A||A⁻¹| = 1."
    },
    {
        id: 97,
        question: "What is |A| for a skew-symmetric matrix of odd order?",
        answer: "Zero.",
        concept: "Property: |A| = |A'| = |-A| = (-1)^n|A|. If n is odd, |A| = -|A| ⇒ |A| = 0."
    },

    // --- ADJOINT ---
    {
        id: 98,
        question: "What is the Adjoint of a matrix A?",
        answer: "The transpose of the cofactor matrix: adj(A) = [C_ij]'.",
        concept: "Adjoint: Also called adjugate. Element (i,j) of adj(A) is C_ji."
    },
    {
        id: 99,
        question: "State the fundamental property of adjoint.",
        answer: "A × adj(A) = adj(A) × A = |A| × I",
        concept: "Key Property: Product of matrix and its adjoint gives |A| times identity."
    },
    {
        id: 100,
        question: "What is |adj(A)| for an n×n matrix?",
        answer: "|A|^(n-1)",
        concept: "Property: Determinant of adjoint is |A| raised to power (n-1)."
    },
    {
        id: 101,
        question: "What is adj(adj(A)) for an n×n matrix?",
        answer: "|A|^(n-2) × A (for n ≥ 2)",
        concept: "Property: Adjoint of adjoint gives scalar multiple of original."
    },
    {
        id: 102,
        question: "What is adj(AB)?",
        answer: "adj(B) × adj(A)",
        concept: "Reversal Law for Adjoint: Similar to inverse and transpose."
    },

    // --- APPLICATIONS: AREA & COLLINEARITY ---
    {
        id: 103,
        question: "How to find area of triangle with vertices (x₁,y₁), (x₂,y₂), (x₃,y₃) using determinants?",
        answer: "Area = (1/2)|det[[x₁,y₁,1],[x₂,y₂,1],[x₃,y₃,1]]|",
        concept: "Application: Absolute value ensures positive area."
    },
    {
        id: 104,
        question: "What is the condition for three points to be collinear using determinants?",
        answer: "det[[x₁,y₁,1],[x₂,y₂,1],[x₃,y₃,1]] = 0",
        concept: "Collinearity: Area of triangle formed is zero."
    },

    // --- SYSTEM OF LINEAR EQUATIONS ---
    {
        id: 105,
        question: "How to write a system of linear equations in matrix form?",
        answer: "AX = B, where A is coefficient matrix, X is variable matrix, B is constant matrix.",
        concept: "Matrix Equation: For a₁x + b₁y = c₁, a₂x + b₂y = c₂: A = [[a₁,b₁],[a₂,b₂]], X = [[x],[y]], B = [[c₁],[c₂]]."
    },
    {
        id: 106,
        question: "What is a Consistent System of equations?",
        answer: "A system that has at least one solution (unique or infinitely many).",
        concept: "Consistency: The equations have common solution(s)."
    },
    {
        id: 107,
        question: "What is an Inconsistent System of equations?",
        answer: "A system that has no solution.",
        concept: "Inconsistency: Equations contradict each other."
    },
    {
        id: 108,
        question: "For AX = B, if |A| ≠ 0, what is the solution?",
        answer: "Unique solution: X = A⁻¹B",
        concept: "Unique Solution: Non-singular coefficient matrix guarantees unique solution."
    },
    {
        id: 109,
        question: "For AX = B, if |A| = 0 and (adj A)B ≠ O, what happens?",
        answer: "System is inconsistent (no solution).",
        concept: "No Solution: Singular matrix with non-zero (adj A)B."
    },
    {
        id: 110,
        question: "For AX = B, if |A| = 0 and (adj A)B = O, what happens?",
        answer: "System may have infinitely many solutions or no solution (need further analysis).",
        concept: "Infinite/No Solutions: Further investigation required."
    },
    {
        id: 111,
        question: "State Martin's Rule for solving AX = B.",
        answer: "If |A| ≠ 0, then X = A⁻¹B gives the unique solution.",
        concept: "Martin's Rule: Uses matrix inverse method for solving linear systems."
    },
    {
        id: 112,
        question: "What is a Homogeneous system of equations?",
        answer: "A system AX = O (where B is zero matrix).",
        concept: "Homogeneous System: Always has trivial solution X = O."
    },
    {
        id: 113,
        question: "When does a homogeneous system have non-trivial solutions?",
        answer: "When |A| = 0 (infinitely many solutions exist).",
        concept: "Non-trivial Solutions: Singular coefficient matrix gives infinite solutions."
    },
    {
        id: 114,
        question: "For a 2×2 matrix A = [[a,b],[c,d]], what is adj(A)?",
        answer: "adj(A) = [[d,-b],[-c,a]]",
        concept: "2×2 Adjoint: Swap diagonal elements, negate off-diagonal elements."
    },
    {
        id: 115,
        question: "If diagonal elements of a matrix are d₁, d₂, d₃ and rest zero, what is its inverse?",
        answer: "Diagonal matrix with elements 1/d₁, 1/d₂, 1/d₃ (provided all d_i ≠ 0).",
        concept: "Inverse of Diagonal Matrix: Reciprocals on diagonal."
    },
    {
        id: 116,
        question: "What is the rank of a zero matrix?",
        answer: "Zero.",
        concept: "Rank: Zero matrix has no non-zero rows/columns."
    },
    {
        id: 117,
        question: "If AB is defined and A is m×n, B is n×p, what is the order of AB?",
        answer: "m × p",
        concept: "Order of Product: Rows of first × Columns of second."
    },
    {
        id: 118,
        question: "What is the determinant of scalar matrix kI_n?",
        answer: "k^n",
        concept: "Property: |kI| = k^n × |I| = k^n."
    },
    {
        id: 119,
        question: "If A is idempotent (A² = A), what is |A|?",
        answer: "|A| = 0 or |A| = 1",
        concept: "Property: |A²| = |A| ⇒ |A|² = |A| ⇒ |A|(|A| - 1) = 0."
    },
    {
        id: 120,
        question: "If A is involutory (A² = I), what is |A|?",
        answer: "|A| = ±1",
        concept: "Property: |A²| = |I| ⇒ |A|² = 1 ⇒ |A| = ±1."
    }
]
    },

    "continuity_diff": {
        title: "Continuity & Differentiability",
        questions: [
            // --- CONTINUITY: DEFINITIONS & TESTS ---
            { id: 1, question: "Intuitive meaning of continuity at x = a?", answer: "No break, jump or hole in the graph at x = a.", concept: "Draw without lifting the pen near x = a." },
            { id: 2, question: "Limit definition of continuity at x = a.", answer: "lim_{x→a} f(x) exists and equals f(a).", concept: "LHL = RHL = f(a)." },
            { id: 3, question: "When is f continuous on an interval I?", answer: "f is continuous at every point of I (with one-sided continuity at end points).", concept: "Check all interior points and endpoints appropriately." },
            { id: 4, question: "Algebra of continuous functions (sum/product).", answer: "If f,g continuous at a, then f±g and f·g are continuous at a.", concept: "Linear combos and products preserve continuity." },
            { id: 5, question: "Quotient of continuous functions.", answer: "If f,g continuous at a and g(a)≠0, then f/g is continuous at a.", concept: "Denominator must be non-zero." },
            { id: 6, question: "Continuity of composite function g∘f.", answer: "If f continuous at a and g continuous at f(a), then g(f(x)) is continuous at a.", concept: "Continuity is preserved under composition." },
            { id: 7, question: "Continuity at a removable discontinuity.", answer: "lim exists at a but ≠ f(a) or f(a) undefined. Redefine f(a)=limit to make continuous.", concept: "Hole can be filled." },
            { id: 8, question: "Jump (step) discontinuity.", answer: "LHL and RHL exist but are unequal at x=a.", concept: "Graph has a finite jump at a." },
            { id: 9, question: "Infinite discontinuity.", answer: "|f(x)|→∞ near x=a.", concept: "Vertical asymptote at x=a." },
            { id: 10, question: "Continuity of polynomial functions.", answer: "Polynomials are continuous for all real x.", concept: "Sum/products of continuous functions are continuous." },
            { id: 11, question: "Continuity of rational functions.", answer: "Continuous where denominator ≠ 0.", concept: "Points where denominator=0 are discontinuities." },
            { id: 12, question: "Continuity of |x|.", answer: "Continuous for all x.", concept: "But not differentiable at x=0." },
            { id: 13, question: "Continuity of greatest integer function [x].", answer: "Discontinuous at all integers, continuous elsewhere.", concept: "Jump of size 1 at each integer." },
            { id: 14, question: "Continuity of sin x and cos x.", answer: "Continuous for all real x.", concept: "Trigonometric functions are continuous everywhere." },
            { id: 15, question: "Continuity of tan x.", answer: "Continuous where cos x ≠ 0 (x ≠ (2k+1)π/2).", concept: "Vertical asymptotes at odd multiples of π/2." },
            { id: 16, question: "Continuity of ln x.", answer: "Continuous for x>0.", concept: "Domain restriction gives continuity on (0,∞)." },
            { id: 17, question: "One-sided continuity at an endpoint.", answer: "At left endpoint a: check RHL = f(a). At right endpoint b: check LHL = f(b).", concept: "Closed interval continuity uses one-sided limits." },
            { id: 18, question: "Piecewise function continuity at join point.", answer: "Match LHL, RHL and f(a) at the join x=a.", concept: "Equate values of pieces at boundary." },
            { id: 19, question: "Continuity of composite with absolute value.", answer: "If f is continuous, then |f| is continuous.", concept: "Composition with continuous |·| preserves continuity." },
            { id: 20, question: "Continuity of roots: √{f(x)}.", answer: "Continuous where f is continuous and f(x)≥0.", concept: "Need argument non-negative for real root." },

            // --- DIFFERENTIABILITY: DEFINITIONS & RELATIONS ---
            { id: 21, question: "First principle definition of derivative at a.", answer: "f'(a)=lim_{h→0}[f(a+h)−f(a)]/h if limit exists.", concept: "Slope of tangent / instantaneous rate." },
            { id: 22, question: "Differentiability implies continuity?", answer: "Yes. Differentiable at a ⇒ Continuous at a.", concept: "But converse fails in general." },
            { id: 23, question: "Does continuity imply differentiability?", answer: "Not necessarily. E.g., |x| is continuous but not differentiable at 0.", concept: "Corner/cusp violates differentiability." },
            { id: 24, question: "Left and right derivatives.", answer: "If both exist and equal at a, f is differentiable at a.", concept: "Equality of LHD and RHD is required." },
            { id: 25, question: "Differentiability of |x| at 0.", answer: "Not differentiable; LHD=−1, RHD=1.", concept: "Sharp corner at origin." },
            { id: 26, question: "Differentiability of [x] at integer n.", answer: "Not differentiable at integers; differentiable elsewhere with derivative 0.", concept: "Jumps create non-differentiability." },
            { id: 27, question: "Differentiability of sign(x).", answer: "Not differentiable at 0; derivative 0 elsewhere.", concept: "Jump at 0." },
            { id: 28, question: "Differentiability of x^{2/3} at 0.", answer: "Not differentiable at 0 (vertical tangent).", concept: "Derivative blows up at 0." },
            { id: 29, question: "Rule for derivative of constant.", answer: "d(c)/dx = 0.", concept: "Constant function has zero slope." },
            { id: 30, question: "Derivative of k·f(x).", answer: "(k·f)' = k·f'.", concept: "Constant multiple rule." },

            // --- CHAIN RULE & BASIC FORMULAE ---
            { id: 31, question: "State the chain rule.", answer: "If y=g(u), u=f(x), then dy/dx = (dy/du)·(du/dx).", concept: "Derivative of composite equals product." },
            { id: 32, question: "Derivative of (f+g).", answer: "(f+g)' = f' + g'.", concept: "Linearity of derivative." },
            { id: 33, question: "Derivative of (f·g).", answer: "(fg)' = f'g + fg'.", concept: "Product rule." },
            { id: 34, question: "Derivative of f/g.", answer: "(f/g)' = (f'g − fg')/g^2 (g≠0).", concept: "Quotient rule." },
            { id: 35, question: "Derivative of [f(x)]^n (n constant).", answer: "n[f(x)]^{n−1}·f'(x).", concept: "Chain rule with power." },
            { id: 36, question: "Derivative of sin(f(x)).", answer: "cos(f)·f'.", concept: "Chain rule with trigonometric." },
            { id: 37, question: "Derivative of cos(f(x)).", answer: "−sin(f)·f'.", concept: "Chain rule with trigonometric." },
            { id: 38, question: "Derivative of e^{f(x)}.", answer: "e^{f(x)}·f'(x).", concept: "Exponential chain rule." },
            { id: 39, question: "Derivative of a^{f(x)} (a>0, a≠1).", answer: "a^{f(x)}·ln a·f'(x).", concept: "General exponential derivative." },
            { id: 40, question: "Derivative of ln(f(x)).", answer: "f'(x)/f(x) (f(x)≠0).", concept: "Logarithmic chain rule." },

            // --- STANDARD DERIVATIVES ---
            { id: 41, question: "d/dx (x^n).", answer: "n x^{n−1}.", concept: "Power rule (n real)." },
            { id: 42, question: "d/dx (sin x), d/dx (cos x).", answer: "cos x, −sin x.", concept: "Basic trig derivatives." },
            { id: 43, question: "d/dx (tan x).", answer: "sec^2 x.", concept: "tan' = sec^2." },
            { id: 44, question: "d/dx (cot x).", answer: "−csc^2 x.", concept: "cot' = −csc^2." },
            { id: 45, question: "d/dx (sec x).", answer: "sec x·tan x.", concept: "sec' = sec·tan." },
            { id: 46, question: "d/dx (csc x).", answer: "−csc x·cot x.", concept: "csc' = −csc·cot." },
            { id: 47, question: "d/dx (e^x) and d/dx (a^x).", answer: "e^x and a^x ln a.", concept: "Exponential derivatives." },
            { id: 48, question: "d/dx (ln x) and d/dx (log_a x).", answer: "1/x and 1/(x ln a), x>0.", concept: "Logarithmic derivatives." },
            { id: 49, question: "d/dx (sin^−1 x).", answer: "1/√(1−x^2), |x|<1.", concept: "Inverse trig derivative." },
            { id: 50, question: "d/dx (cos^−1 x).", answer: "−1/√(1−x^2), |x|<1.", concept: "Inverse trig derivative." },
            { id: 51, question: "d/dx (tan^−1 x).", answer: "1/(1+x^2).", concept: "Inverse trig derivative." },
            { id: 52, question: "d/dx (cot^−1 x).", answer: "−1/(1+x^2).", concept: "Inverse trig derivative." },
            { id: 53, question: "d/dx (sec^−1 x).", answer: "1/(|x|√(x^2−1)).", concept: "Domain |x|>1." },
            { id: 54, question: "d/dx (csc^−1 x).", answer: "−1/(|x|√(x^2−1)).", concept: "Domain |x|>1." },
            { id: 55, question: "d/dx (ln|f(x)|).", answer: "f'(x)/f(x).", concept: "Valid where f(x)≠0." },

            // --- IMPLICIT DIFFERENTIATION ---
            { id: 56, question: "Implicit differentiation idea.", answer: "Differentiate F(x,y)=0 w.r.t. x treating y as y(x), then solve for dy/dx.", concept: "Use chain rule on y terms." },
            { id: 57, question: "dy/dx for x^2 + y^2 = a^2.", answer: "−x/y.", concept: "Differentiate: 2x + 2y·dy/dx = 0." },
            { id: 58, question: "dy/dx for x^y = a (constant a>0).", answer: "dy/dx = −(y/x)/ln x (when x>0, x≠1).", concept: "Take logs: y ln x = ln a, differentiate." },
            { id: 59, question: "dy/dx for y^x = a (constant).", answer: "dy/dx = −(y ln y)/x (assuming y>0).", concept: "Take logs: x ln y = ln a." },
            { id: 60, question: "d/dx of inverse relation: sin y = x.", answer: "dy/dx = 1/√(1−x^2).", concept: "Implicitly differentiate to derive (sin^−1 x)'." },

            // --- PARAMETRIC DIFFERENTIATION ---
            { id: 61, question: "If x=f(t), y=g(t), formula for dy/dx.", answer: "(dy/dt)/(dx/dt), provided dx/dt≠0.", concept: "Chain rule via parameter." },
            { id: 62, question: "Second derivative in parametric form.", answer: "d²y/dx² = (d/dt(dy/dx))/(dx/dt).", concept: "Differentiate dy/dx wrt t and divide by dx/dt." },
            { id: 63, question: "For x=a cos t, y=a sin t, dy/dx?", answer: "−cot t = −x/y.", concept: "Circle parametric derivative." },
            { id: 64, question: "For x=t^2, y=t^3, find dy/dx.", answer: "(3t^2)/(2t) = (3/2)t (t≠0).", concept: "Then d²y/dx² = 3/(4t)." },
            { id: 65, question: "Parametric monotonicity condition.", answer: "Sign of dy/dx equals sign of (dy/dt)·sign of (dx/dt).", concept: "dx/dt must not be zero." },

            // --- DIFFERENTIATION W.R.T. ANOTHER FUNCTION ---
            { id: 66, question: "dy/dg(x) in terms of x-derivatives.", answer: "dy/dg = (dy/dx)/(dg/dx).", concept: "Chain rule rearranged." },
            { id: 67, question: "Derivative of sin(x^3) w.r.t. x^3.", answer: "cos(x^3).", concept: "Let u=x^3, d/du[sin u]=cos u." },
            { id: 68, question: "d(sin^2 x) / d(x^2).", answer: "(d/dx sin^2 x)/(d/dx x^2) = (2 sin x cos x)/(2x) = (sin 2x)/(2x).", concept: "Quotient of derivatives." },

            // --- LOGARITHMIC DIFFERENTIATION ---
            { id: 69, question: "Define logarithmic differentiation.", answer: "Take log on both sides, differentiate, then solve for dy/dx.", concept: "Useful for products/powers like y=x^x." },
            { id: 70, question: "d/dx of y = x^x (x>0).", answer: "x^x(ln x + 1).", concept: "ln y = x ln x ⇒ y'/y = 1+ln x." },
            { id: 71, question: "d/dx of y = (f(x))^{g(x)} (f>0).", answer: "y' = y[g' ln f + g·f'/f].", concept: "ln y = g ln f." },
            { id: 72, question: "d/dx of y = x^{x^2} (x>0).", answer: "y' = x^{x^2}(2x ln x + x).", concept: "g=x^2, f=x." },
            { id: 73, question: "d/dx of y = (sin x)^{x} (sin x>0).", answer: "y'= (sin x)^x [ln(sin x) + x cot x].", concept: "Domain where sin x>0." },

            // --- SECOND ORDER (SUCCESSIVE) DERIVATIVES ---
            { id: 74, question: "Meaning of second derivative.", answer: "Derivative of the first derivative; denotes curvature/concavity.", concept: "d²y/dx²." },
            { id: 75, question: "If y = e^{2x}, find y', y''.", answer: "y'=2e^{2x}, y''=4e^{2x}.", concept: "Chain rule on exponential." },
            { id: 76, question: "If y = ln x, find y'', x>0.", answer: "y' = 1/x, y'' = −1/x^2.", concept: "Logarithmic second derivative." },
            { id: 77, question: "If y = sin 3x, find y''.", answer: "y' = 3 cos 3x, y'' = −9 sin 3x.", concept: "Twice apply chain rule." },
            { id: 78, question: "Second derivative via implicit differentiation (x^2+y^2=a^2).", answer: "y' = −x/y, y'' = −a^2/y^3.", concept: "Differentiate y' and use relation to eliminate x." },

            // --- EXTRA CHECKS & EDGE CASES ---
            { id: 79, question: "Continuity at piecewise join f(x)= {x^2, x≤1; 2x−1, x>1} at x=1.", answer: "LHL=1, RHL=1, f(1)=1 ⇒ continuous.", concept: "Match values at the join." },
            { id: 80, question: "Differentiability at the same join x=1.", answer: "Left derivative=2, right derivative=2 ⇒ differentiable.", concept: "Check LHD=RHD for differentiability." }
        ,
            // --- VIVA FOCUS: KEY THEOREMS & PROPERTIES ---
            { id: 81, question: "State the Intermediate Value Theorem (IVT).", answer: "If f is continuous on [a,b] and k lies between f(a) and f(b), then ∃ c∈(a,b) with f(c)=k.", concept: "Continuity on closed interval ensures hitting all intermediate values." },
            { id: 82, question: "State the Extreme Value Theorem (Weierstrass).", answer: "If f is continuous on [a,b], then f attains both an absolute maximum and an absolute minimum on [a,b].", concept: "Guarantees existence of extrema on closed bounded intervals." },
            { id: 83, question: "Rolle's Theorem: statement and hypotheses.", answer: "If f is continuous on [a,b], differentiable on (a,b), and f(a)=f(b), then ∃ c∈(a,b) with f'(c)=0.", concept: "Horizontal tangent inside when endpoints equal." },
            { id: 84, question: "Lagrange Mean Value Theorem (LMVT) statement.", answer: "If f is continuous on [a,b] and differentiable on (a,b), then ∃ c∈(a,b) with f'(c) = (f(b)−f(a))/(b−a).", concept: "Instantaneous rate equals average rate at some point." },
            { id: 85, question: "Consequence of LMVT for constant derivative.", answer: "If f'(x)=0 on (a,b) and f is continuous on [a,b], then f is constant on [a,b].", concept: "Zero slope everywhere ⇒ no change in value." },
            { id: 86, question: "Cauchy Mean Value Theorem (CMVT) statement.", answer: "If f,g are continuous on [a,b], differentiable on (a,b), and g'(x)≠0 on (a,b), then ∃ c with (f'(c)/g'(c)) = (f(b)−f(a))/(g(b)−g(a)).", concept: "Generalizes LMVT using a second function g." },
            { id: 87, question: "Derivative of an inverse function.", answer: "If f is differentiable and strictly monotonic with inverse f^{-1}, then (f^{-1})'(y) = 1 / f'(x) where y=f(x).", concept: "Chain rule on f(f^{-1}(y))=y." },
            { id: 88, question: "Differentiability of composite functions.", answer: "If f is differentiable at a and g is differentiable at f(a), then g∘f is differentiable at a with (g∘f)'(a)=g'(f(a))·f'(a).", concept: "Chain rule differentiability version." },
            { id: 89, question: "Derivative of |f(x)| (where f(x)≠0).", answer: "d/dx |f(x)| = (f(x)/|f(x)|)·f'(x).", concept: "Equals sgn(f(x))·f'(x); non-differentiable where f crosses 0 (unless f'(a)=0 with even touch)." },
            { id: 90, question: "Piecewise differentiability at a join x=a.", answer: "Require continuity: LHL=RHL=f(a), and matching derivatives: LHD=RHD for differentiability.", concept: "C^0 for continuity; C^1 at join for differentiability." },
            { id: 91, question: "Continuity of inverse function.", answer: "If f is continuous and strictly monotonic on [a,b], then f^{-1} is continuous on [f(a),f(b)].", concept: "Monotone continuous bijection preserves continuity in inverse." },
            { id: 92, question: "One-sided derivatives and differentiability.", answer: "If both one-sided derivatives exist and are equal at a, then f is differentiable at a.", concept: "Equality of LHD and RHD is necessary and sufficient." }
        ]
    },
    "applications_deriv": {
        title: "Applications of Derivatives",
        questions: [
            // --- RATE OF CHANGE / RELATED RATES ---
            { id: 1, question: "What is rate of change of a quantity s with respect to t?", answer: "It is ds/dt, the instantaneous rate of change.", concept: "Derivative measures rate per unit change of the independent variable." },
            { id: 2, question: "Physical meaning of ds/dt when s is distance.", answer: "It is velocity v.", concept: "v = dx/dt; acceleration a = dv/dt = d^2x/dt^2." },
            { id: 3, question: "What is acceleration in terms of x(t)?", answer: "a = d^2x/dt^2.", concept: "Second derivative of position w.r.t. time." },
            { id: 4, question: "If y = f(x) and x changes with t, express dy/dt.", answer: "dy/dt = (dy/dx)(dx/dt).", concept: "Chain rule for related rates." },
            { id: 5, question: "For a circle A = πr^2, find dA/dt.", answer: "dA/dt = 2πr·dr/dt.", concept: "Differentiate A(r) using chain rule." },
            { id: 6, question: "For a sphere V = (4/3)πr^3, find dV/dt.", answer: "dV/dt = 4πr^2·dr/dt.", concept: "Surface area times dr/dt." },
            { id: 7, question: "If x and y depend on t with x^2 + y^2 = a^2, find x·dx/dt + y·dy/dt.", answer: "0.", concept: "Differentiate and use 2x dx/dt + 2y dy/dt = 0." },
            { id: 8, question: "Cylinder with V = πr^2h; express dV/dt.", answer: "dV/dt = 2πr h·dr/dt + πr^2·dh/dt.", concept: "Product rule + chain rule." },
            { id: 9, question: "When two quantities are related by F(x,y)=0, how to relate dy/dt and dx/dt?", answer: "Differentiate implicitly to get F_x dx/dt + F_y dy/dt = 0.", concept: "Relate rates via partial derivatives in implicit form." },
            { id: 10, question: "Units of rate of change.", answer: "Units of numerator per unit of denominator (e.g., m/s, cm^3/s).", concept: "Derivative carries physical units accordingly." },

            // --- TANGENTS AND NORMALS ---
            { id: 11, question: "Slope of the tangent at x = a.", answer: "m = f'(a).", concept: "Slope equals derivative at the point." },
            { id: 12, question: "Point-slope form of tangent at (a, f(a)).", answer: "y − f(a) = f'(a)(x − a).", concept: "Use derivative as slope." },
            { id: 13, question: "Slope of normal at x = a (f'(a) ≠ 0).", answer: "m_n = −1/f'(a).", concept: "Normal is perpendicular to tangent." },
            { id: 14, question: "Equation of normal at (a, f(a)).", answer: "y − f(a) = −(x − a)/f'(a).", concept: "Negative reciprocal slope." },
            { id: 15, question: "Tangent parallel to a given line y = mx + c.", answer: "Set f'(x) = m and solve for x; use point to get equation.", concept: "Parallel ⇒ equal slopes." },
            { id: 16, question: "Tangent perpendicular to a given line y = mx + c.", answer: "Set f'(x) = −1/m.", concept: "Perpendicular ⇒ product of slopes = −1." },
            { id: 17, question: "Tangent for parametric curve x = f(t), y = g(t).", answer: "Slope m = (dy/dt)/(dx/dt) at t=t0.", concept: "Parametric derivative gives tangent slope." },
            { id: 18, question: "Normal for parametric curve at t0.", answer: "Slope m_n = −(dx/dt)/(dy/dt).", concept: "Negative reciprocal of tangent slope." },
            { id: 19, question: "Tangent to implicit curve F(x,y)=0 at (x0,y0).", answer: "Use dy/dx = −F_x/F_y (if F_y ≠ 0).", concept: "Implicit differentiation gives slope." },
            { id: 20, question: "Condition for two curves to have common tangent at a point.", answer: "They pass through the point and have equal derivatives there.", concept: "Same point and same slope." },

            // --- INCREASING/DECREASING FUNCTIONS ---
            { id: 21, question: "Definition of increasing function on I.", answer: "f is increasing if x1<x2 ⇒ f(x1)≤f(x2) for all x1,x2 in I.", concept: "Strictly increasing uses < instead of ≤." },
            { id: 22, question: "Derivative test for increasing.", answer: "If f'(x) > 0 on I, then f is increasing on I.", concept: "Positive slope implies increasing." },
            { id: 23, question: "Derivative test for decreasing.", answer: "If f'(x) < 0 on I, then f is decreasing on I.", concept: "Negative slope implies decreasing." },
            { id: 24, question: "When is a function constant on an interval?", answer: "If f'(x) = 0 for all x in the interval and f is continuous there.", concept: "Zero slope gives constant value (with continuity)." },
            { id: 25, question: "How to find intervals of monotonicity?", answer: "Find critical points (f'=0 or undefined), test sign of f' between them.", concept: "Sign chart method." },
            { id: 26, question: "What are critical points?", answer: "Points where f'(x)=0 or f'(x) does not exist.", concept: "Candidates for extrema or monotonic change." },
            { id: 27, question: "Role of endpoints on a closed interval.", answer: "Include endpoints with critical points when analyzing monotonicity and extrema.", concept: "Check [a,b] endpoints." },
            { id: 28, question: "Effect of sign change in f'.", answer: "f' positive to negative ⇒ local max; negative to positive ⇒ local min.", concept: "First derivative test for turning points." },
            { id: 29, question: "If f'(x)=0 on an interval but f not constant?", answer: "For differentiable functions, f'(x)=0 on an interval ⇒ f is constant; otherwise may be pathological.", concept: "Typical syllabus assumes differentiability ⇒ constant." },
            { id: 30, question: "Monotonicity of polynomials of odd degree (end behavior).", answer: "Often increasing for large x if leading coeff>0; but use f' to determine exact intervals.", concept: "Derivative gives precise intervals." },

            // --- MAXIMA AND MINIMA: DEFINITIONS ---
            { id: 31, question: "Definition of local (relative) maximum at x=a.", answer: "f(a) ≥ f(x) for all x near a.", concept: "Inequality holds in a neighborhood of a." },
            { id: 32, question: "Definition of local minimum at x=a.", answer: "f(a) ≤ f(x) for all x near a.", concept: "Neighborhood-based definition." },
            { id: 33, question: "Absolute (global) maximum on [a,b].", answer: "Value f(c) such that f(c) ≥ f(x) for all x∈[a,b].", concept: "Greatest value on the whole interval." },
            { id: 34, question: "Absolute (global) minimum on [a,b].", answer: "Value f(c) such that f(c) ≤ f(x) for all x∈[a,b].", concept: "Least value on the whole interval." },
            { id: 35, question: "Stationary/turning points.", answer: "Points where f'(a)=0.", concept: "Candidates for local maxima/minima or points of inflection." },
            { id: 36, question: "Necessary condition for local extremum (interior).", answer: "If f has a local extremum at interior point a and is differentiable there, then f'(a)=0.", concept: "But f'(a)=0 alone is not sufficient." },
            { id: 37, question: "Sufficient condition via second derivative.", answer: "If f'(a)=0 and f''(a)>0 ⇒ local min; f''(a)<0 ⇒ local max.", concept: "Second derivative test." },
            { id: 38, question: "When second derivative test is inconclusive.", answer: "If f'(a)=0 and f''(a)=0.", concept: "Use higher derivatives or first derivative test." },
            { id: 39, question: "First derivative test statement.", answer: "If f' changes +→− at a ⇒ local max; −→+ at a ⇒ local min; no sign change ⇒ no extremum.", concept: "Sign change logic." },
            { id: 40, question: "Closed interval method for absolute extrema.", answer: "Evaluate f at critical points in (a,b) and at endpoints a,b; choose largest/smallest.", concept: "Guaranteed extrema on continuous functions over [a,b]." },

            // --- MAXIMA/MINIMA: APPLICATION STEPS ---
            { id: 41, question: "General steps to maximize/minimize a quantity.", answer: "Express target as a function of one variable using constraints, find f', solve f'=0, test and report value.", concept: "Optimization workflow." },
            { id: 42, question: "Optimization under constraint example (rectangle area with fixed perimeter).", answer: "Area is maximized when rectangle is a square.", concept: "Symmetry + derivative test." },
            { id: 43, question: "Box without lid of fixed volume: what shape minimizes surface area?", answer: "A cube-like proportion (length=width=height×√?), exact ratio derived by calculus; for square base, optimal h = a/2.", concept: "Set up S(a,h) with V fixed; use derivative test." },
            { id: 44, question: "Wire cut into two for square and circle to minimize total area.", answer: "Allocate more length to the shape with lower area-perimeter efficiency; calculus gives ratio optimizing total area.", concept: "Turn constraint into single-variable function, then optimize." },
            { id: 45, question: "Least distance from a point to a curve (concept).", answer: "Minimize squared distance function to avoid square roots.", concept: "Minimize D^2(x) = (x−x0)^2 + (f(x)−y0)^2." },
            { id: 46, question: "Revenue R(q) and cost C(q): define marginal revenue and marginal cost.", answer: "MR = dR/dq, MC = dC/dq.", concept: "Derivatives as rates per unit output." },
            { id: 47, question: "Condition for profit maximization in terms of q.", answer: "Set dπ/dq = 0 where π = R − C; often MR = MC at optimum.", concept: "Then test second derivative or first derivative sign." },
            { id: 48, question: "Minimize material use for a cylindrical can of fixed volume.", answer: "Optimal when height equals diameter (h = 2r).", concept: "From S(r) with V fixed, derivative ⇒ h=2r." },
            { id: 49, question: "Light reflection path (Snell/Fermat idea simplified).", answer: "Equivalent to minimizing travel time; calculus derives reflection law (angles equal).", concept: "Optimization under geometry constraints." },
            { id: 50, question: "Find point on y=mx+c closest to origin (concept).", answer: "Drop a perpendicular: distance minimized at foot of perpendicular from origin.", concept: "Analytically minimize D^2(x)." },

            // --- APPLIED FIRST/SECOND DERIVATIVE TESTS ---
            { id: 51, question: "Use of first derivative test in word problems.", answer: "After f'=0 yields candidates, study sign of f' around each.", concept: "Confirms max/min and monotonic intervals." },
            { id: 52, question: "Use of second derivative test in word problems.", answer: "Compute f'' at critical points: >0 ⇒ min, <0 ⇒ max.", concept: "Quicker test when f'' exists and non-zero." },
            { id: 53, question: "What if f''(x0)=0 at a critical point?", answer: "Test is inconclusive; use first derivative test or higher derivatives.", concept: "Check sign change or use series expansion." },
            { id: 54, question: "Role of constraints in optimization.", answer: "Convert multiple variables to one using the constraint equation.", concept: "Substitution reduces dimensionality." },
            { id: 55, question: "How to report maxima/minima in closed interval problems.", answer: "Provide both x-value(s) and the extremal function value; include endpoints.", concept: "Absolute extrema require endpoints." },
            { id: 56, question: "Identify increasing/decreasing intervals before extrema.", answer: "Locate critical points and test sign of f' to segment intervals.", concept: "Gives full behavior picture." },
            { id: 57, question: "Geometric meaning of f''>0 and f''<0.", answer: ">0: curve concave up (cup); <0: concave down (cap).", concept: "Concavity aids in visualizing extrema." },
            { id: 58, question: "Relationship between point of inflection and second derivative.", answer: "At inflection, concavity changes sign; f'' often 0 there but not sufficient alone.", concept: "Need sign change test for f''." },
            { id: 59, question: "When can endpoints be absolute extrema even if f'(x)≠0 there?", answer: "On closed intervals, absolute extrema may occur at endpoints regardless of derivative.", concept: "Derivative test applies to interior points; endpoints must be checked directly." },
            { id: 60, question: "Checklist for solving an application problem (summary).", answer: "1) Define variable and target function; 2) Use constraints to reduce variables; 3) Domain restrictions; 4) Find f', set to 0; 5) Test candidates (first/second derivative); 6) Compare values (include endpoints).", concept: "Systematic approach prevents mistakes." }
        ,
            // --- VIVA FOCUS: DIFFERENTIALS & APPROXIMATIONS ---
            { id: 61, question: "Define differential dy in terms of dx.", answer: "dy = f'(x) dx.", concept: "For small changes, Δy ≈ dy = f'(a) Δx (linear approximation)." },
            { id: 62, question: "First-order (linear) approximation at x=a.", answer: "f(a+Δx) ≈ f(a) + f'(a)Δx for small Δx.", concept: "Tangent line as local linear model." },
            { id: 63, question: "Relative and percentage error in y=f(x).", answer: "Relative error ≈ |dy/y|; Percentage error ≈ 100·|dy/y|%.", concept: "Use dy = f'(x) dx with measured dx to propagate error." },
            { id: 64, question: "Approximate change in a power: y=x^n.", answer: "dy ≈ n x^{n−1} dx ⇒ relative error ≈ n·(dx/x).", concept: "Useful for quick percent error estimates." },
            { id: 65, question: "Optimization template: rectangle with fixed perimeter P for max area.", answer: "Square gives maximum area; side = P/4.", concept: "Single-variable reduction then derivative test." },
            { id: 66, question: "Optimization template: cylinder of fixed volume V for min surface area.", answer: "At optimum h = 2r.", concept: "Use S(r) with V fixed and test S'." },
            { id: 67, question: "Optimization template: sum of distances to axes for point on line.", answer: "Set objective, express via single variable, use derivative test.", concept: "General problem-solving pattern for word problems." },
            { id: 68, question: "When first and second derivative tests disagree or fail.", answer: "If f'(a)=0 and f''(a)=0, use higher derivatives or first derivative sign change.", concept: "Fallback logic to classify critical points." },
            { id: 69, question: "Find angle of inclination of tangent at (a,f(a)).", answer: "tan θ = f'(a).", concept: "Slope m = tan θ." },
            { id: 70, question: "Normal length to x-axis at (a,f(a)).", answer: "If f'(a)≠0, shortest distance from (a,f(a)) to x-axis along normal is |f(a)|·√(1+[f'(a)]^2).", concept: "Uses normal direction; contextual viva cue." }
        ]
    },
    "integrals": {
        title: "Integrals",
        questions: [
            // --- INDEFINITE INTEGRALS: BASICS ---
            { id: 1, question: "What is an indefinite integral?", answer: "It is the family of antiderivatives of a function, written ∫ f(x) dx = F(x) + C.", concept: "Integration is the inverse process of differentiation." },
            { id: 2, question: "Define antiderivative.", answer: "A function F(x) such that F'(x) = f(x).", concept: "If F'(x) = f(x), then ∫ f(x) dx = F(x) + C." },
            { id: 3, question: "What is the constant of integration C?", answer: "An arbitrary constant added to the antiderivative to represent all primitives.", concept: "Differentiation kills constants, so we add C after integrating." },
            { id: 4, question: "∫ 0 dx equals?", answer: "C (a constant).", concept: "Integral of zero is a constant function." },
            { id: 5, question: "State linearity of integrals.", answer: "∫ (af + bg) dx = a∫ f dx + b∫ g dx.", concept: "Integration is linear." },

            // --- BASIC STANDARD FORMS ---
            { id: 6, question: "∫ x^n dx (n ≠ −1).", answer: "x^{n+1}/(n+1) + C.", concept: "Power rule for integration." },
            { id: 7, question: "∫ dx/x.", answer: "ln|x| + C.", concept: "Inverse rule for n = −1 case." },
            { id: 8, question: "∫ e^x dx.", answer: "e^x + C.", concept: "Exponential integrates to itself." },
            { id: 9, question: "∫ a^x dx (a > 0, a ≠ 1).", answer: "a^x/ln a + C.", concept: "Base a exponential formula." },
            { id: 10, question: "∫ sin x dx and ∫ cos x dx.", answer: "−cos x + C and sin x + C.", concept: "Basic trig integrals." },
            { id: 11, question: "∫ sec^2 x dx and ∫ csc^2 x dx.", answer: "tan x + C and −cot x + C.", concept: "Derivatives inverted." },
            { id: 12, question: "∫ sec x tan x dx and ∫ csc x cot x dx.", answer: "sec x + C and −csc x + C.", concept: "Direct primitives of product identities." },
            { id: 13, question: "∫ tan x dx and ∫ cot x dx.", answer: "−ln|cos x| + C and ln|\sin x| + C.", concept: "Use tan = sin/cos, cot = cos/sin with substitution." },

            // --- INTEGRATION AS INVERSE OF DIFFERENTIATION (FORMS) ---
            { id: 14, question: "Form ∫ f'(x)[f(x)]^n dx (n ≠ −1).", answer: "[f(x)]^{n+1}/(n+1) + C.", concept: "Substitute u = f(x)." },
            { id: 15, question: "Form ∫ f'(x)/f(x) dx.", answer: "ln|f(x)| + C.", concept: "Logarithmic integral form." },
            { id: 16, question: "Form ∫ f'(x)/(a + b f(x)) dx.", answer: "(1/b) ln|a + b f(x)| + C.", concept: "Chain rule pattern." },
            { id: 17, question: "Form ∫ f'(x)/(\sqrt{f(x)}) dx.", answer: "2\sqrt{f(x)} + C.", concept: "Use u = \sqrt{f(x)} or u = f(x)." },
            { id: 18, question: "Form ∫ f'(x)/(1 + [f(x)]^2) dx.", answer: "\tan^{-1}(f(x)) + C.", concept: "Arctan form." },

            // --- SUBSTITUTION METHOD ---
            { id: 19, question: "State substitution rule.", answer: "If u = g(x), then ∫ f(g(x)) g'(x) dx = ∫ f(u) du.", concept: "Change of variable simplifies integrand." },
            { id: 20, question: "Substitute for ∫ cos(3x) dx.", answer: "Let u = 3x ⇒ ∫ cos u (du/3) = (1/3) sin u + C.", concept: "Factor derivative inside integrand." },
            { id: 21, question: "∫ e^{ax+b} dx.", answer: "(1/a)e^{ax+b} + C.", concept: "Substitute u=ax+b." },
            { id: 22, question: "∫ 1/(ax + b) dx.", answer: "(1/a) ln|ax + b| + C.", concept: "Standard linear denominator form." },
            { id: 23, question: "∫ 1/\sqrt{a^2 − x^2} dx.", answer: "\sin^{-1}(x/a) + C.", concept: "Use x = a\sin t substitution." },
            { id: 24, question: "∫ 1/(a^2 + x^2) dx.", answer: "(1/a) \tan^{-1}(x/a) + C.", concept: "Standard arctan form." },
            { id: 25, question: "∫ 1/(x\sqrt{x^2 − a^2}) dx (x>|a|).", answer: "(1/a) \sec^{-1}(|x|/a) + C.", concept: "Use x = a\sec t or x=a\cosh t." },

            // --- TRIGONOMETRIC POWERS ---
            { id: 26, question: "Identity to reduce sin^2 x and cos^2 x.", answer: "sin^2 x = (1−cos 2x)/2, cos^2 x = (1+cos 2x)/2.", concept: "Use half-angle to integrate even powers." },
            { id: 27, question: "Integrate sin^2 x.", answer: "∫ sin^2 x dx = (x/2) − (\sin 2x)/4 + C.", concept: "Apply half-angle identity." },
            { id: 28, question: "Integrate cos^2 x.", answer: "∫ cos^2 x dx = (x/2) + (\sin 2x)/4 + C.", concept: "Half-angle identity." },
            { id: 29, question: "Integrate sin^3 x.", answer: "Use sin^2 x = 1 − cos^2 x ⇒ ∫ sin x (1 − cos^2 x) dx ⇒ ...", concept: "Odd power: separate one sin x and substitute u=cos x." },
            { id: 30, question: "Integrate cos^3 x.", answer: "Separate cos x and use u = sin x ⇒ ∫ (1 − sin^2 x) d(\sin x).", concept: "Odd power strategy mirrors sin^3 x." },
            { id: 31, question: "Integrate sin^4 x.", answer: "Use power-reduction twice via cos 2x and cos 4x identities.", concept: "Even power reduction technique." },
            { id: 32, question: "Integrate cos^4 x.", answer: "Same as sin^4 x using power-reduction identities.", concept: "Systematic reduction to cos multiples." },

            // --- MORE TRIG FORMS ---
            { id: 33, question: "∫ 1/(a + b\sin x) dx.", answer: "Use t = \tan(x/2) or auxiliary angle; result: (2/\sqrt{a^2−b^2}) \tan^{-1}\Big(\frac{(\sqrt{a^2−b^2})\tan(x/2)+b}{a}\Big) + C.", concept: "Weierstrass substitution or a cos-shift method." },
            { id: 34, question: "∫ 1/(a + b\cos x) dx.", answer: "Analogous to sin form with t=\tan(x/2).", concept: "Standard rational-in-t transform." },
            { id: 35, question: "∫ (\cos x)/(a\cos x + b\sin x) dx.", answer: "Use substitution u = a\cos x + b\sin x.", concept: "Numerator is derivative combination." },
            { id: 36, question: "∫ (\sin x)/(a\cos x + b\sin x) dx.", answer: "Similarly use u = a\cos x + b\sin x.", concept: "Linear combination derivative in numerator." },
            { id: 37, question: "∫ dx/(a\cos x + b\sin x).", answer: "Use t = \tan(x/2) to reduce to rational form in t.", concept: "Standard Weierstrass substitution." },

            // --- INTEGRATION BY PARTS ---
            { id: 38, question: "State integration by parts formula.", answer: "∫ u dv = u v − ∫ v du.", concept: "Product integrals technique (reverse product rule)." },
            { id: 39, question: "LIATE rule usage.", answer: "Choose u as Logarithmic, Inverse trig, Algebraic, Trig, Exponential (priority order).", concept: "Heuristic for selecting u in by-parts." },
            { id: 40, question: "∫ x e^x dx (outline).", answer: "Let u=x, dv=e^x dx ⇒ result x e^x − e^x + C.", concept: "By parts once." },
            { id: 41, question: "∫ x \sin x dx (outline).", answer: "By parts twice: −x \cos x + \sin x + C.", concept: "Cyclic by parts." },
            { id: 42, question: "∫ (\ln x) dx.", answer: "x \ln x − x + C.", concept: "Set u=ln x, dv=dx." },
            { id: 43, question: "∫ \tan^{-1} x dx.", answer: "x \tan^{-1} x − (1/2) \ln(1+x^2) + C.", concept: "By parts with u = arctan x." },

            // --- PARTIAL FRACTIONS (PROPER RATIONAL) ---
            { id: 44, question: "When to use partial fractions?", answer: "For proper rational functions P(x)/Q(x) with deg P < deg Q.", concept: "Decompose into simpler rational terms." },
            { id: 45, question: "If deg P ≥ deg Q, what first?", answer: "Perform polynomial long division to get proper part + polynomial.", concept: "Then decompose proper part." },
            { id: 46, question: "Linear distinct factors decomposition.", answer: "\frac{A}{x−a} + \frac{B}{x−b} + ...", concept: "Cover-up or equating coefficients." },
            { id: 47, question: "Repeated linear factors (x−a)^n decomposition.", answer: "A/(x−a) + B/(x−a)^2 + ... + N/(x−a)^n.", concept: "Include all powers up to n." },
            { id: 48, question: "Irreducible quadratic factor decomposition.", answer: "(Ax + B)/(x^2 + px + q).", concept: "Numerator linear for quadratic denominator." },
            { id: 49, question: "Example: ∫ (2x+1)/[(x−1)(x+3)] dx (outline).", answer: "Decompose as A/(x−1)+B/(x+3), integrate to logs.", concept: "Standard linear partial fractions." },
            { id: 50, question: "Example: ∫ dx/(x^2+1).", answer: "\tan^{-1} x + C.", concept: "Quadratic irreducible standard form." },

            // --- RATIONAL FORMS & SPECIAL TYPES ---
            { id: 51, question: "∫ dx/(x^2 − a^2).", answer: "(1/2a) \ln| (x−a)/(x+a) | + C.", concept: "Partial fractions via factorization." },
            { id: 52, question: "∫ dx/(a^2 − x^2).", answer: "(1/2a) \ln| (a+x)/(a−x) | + C.", concept: "Sign-adjusted variant." },
            { id: 53, question: "∫ dx/(x^2 + px + q).", answer: "Complete square ⇒ reduce to arctan form.", concept: "Write x^2 + px + q = (x+p/2)^2 + (q − p^2/4)." },
            { id: 54, question: "∫ dx/(x^4 + 1) (idea).", answer: "Factor as (x^2+\sqrt{2}x+1)(x^2−\sqrt{2}x+1), decompose into partial fractions.", concept: "Advanced but standard trick." },
            { id: 55, question: "∫ x/(x^2 + a^2) dx.", answer: "(1/2) \ln(x^2 + a^2) + C.", concept: "Substitute u = x^2 + a^2." },
            { id: 56, question: "∫ x/(\sqrt{x^2 + a^2}) dx.", answer: "\sqrt{x^2 + a^2} + C.", concept: "Derivative of sqrt form in numerator." },
            { id: 57, question: "∫ dx/(x \sqrt{x^2 − a^2}).", answer: "(1/a) \sec^{-1}(|x|/a) + C.", concept: "Standard inverse secant form." },
            { id: 58, question: "∫ dx/(x^2 + a^2)^n (n>1).", answer: "Use reduction or trigonometric substitution.", concept: "Recursive relations available." },

            // --- DEFINITE INTEGRALS: FUNDAMENTALS ---
            { id: 59, question: "Define definite integral ∫_a^b f(x) dx.", answer: "A number equal to F(b) − F(a), where F is an antiderivative of f.", concept: "Fundamental Theorem of Calculus (FTC)." },
            { id: 60, question: "State FTC (without proof).", answer: "If F' = f and f is integrable on [a,b], then ∫_a^b f(x) dx = F(b) − F(a).", concept: "Links integration and differentiation." },
            { id: 61, question: "Additivity property.", answer: "∫_a^b f = ∫_a^c f + ∫_c^b f for a < c < b.", concept: "Split interval property." },
            { id: 62, question: "Reversal of limits.", answer: "∫_a^b f(x) dx = −∫_b^a f(x) dx.", concept: "Changing order changes sign." },
            { id: 63, question: "Zero-length interval.", answer: "∫_a^a f(x) dx = 0.", concept: "No area over zero width." },
            { id: 64, question: "Linearity for definite integrals.", answer: "∫_a^b (af + bg) dx = a∫_a^b f dx + b∫_a^b g dx.", concept: "Same as indefinite with bounds." },
            { id: 65, question: "Substitution in definite integrals.", answer: "If x=\phi(t), then ∫_a^b f(x) dx = ∫_{\alpha}^{\beta} f(\phi(t)) \phi'(t) dt.", concept: "Change limits accordingly." },
            { id: 66, question: "Property: ∫_a^b f(x) dx = ∫_a^b f(a+b−x) dx.", answer: "True.", concept: "Use substitution x → a+b−x." },
            { id: 67, question: "Even/odd properties over [−a,a].", answer: "Even f: 2∫_0^a f; Odd f: 0.", concept: "Symmetry about origin." },
            { id: 68, question: "Property: ∫_0^a f(x) dx = ∫_0^a f(a−x) dx.", answer: "True.", concept: "Symmetry about x=a/2." },

            // --- DEFINITE INTEGRAL EVALUATION TIPS ---
            { id: 69, question: "Use property with f(a+b−x) for ∫_0^\pi x \sin x dx (idea).", answer: "Pair x with (\pi−x) to simplify integral to \pi/2 ∫_0^\pi \sin x dx.", concept: "Symmetry trick reduces x to constant factor." },
            { id: 70, question: "Evaluate ∫_0^a x dx.", answer: "a^2/2.", concept: "F(b) − F(a) with F=x^2/2." },
            { id: 71, question: "Evaluate ∫_0^a (a−x) dx.", answer: "a^2/2.", concept: "Same area by symmetry." },
            { id: 72, question: "Evaluate ∫_0^{\pi} \sin x dx.", answer: "2.", concept: "Antiderivative −cos x from 0 to \pi." },
            { id: 73, question: "Evaluate ∫_0^{\pi/2} \sin^2 x dx.", answer: "\pi/4.", concept: "Use half-angle identity." },
            { id: 74, question: "Evaluate ∫_{−a}^{a} x^3 dx.", answer: "0.", concept: "Odd function on symmetric interval." },
            { id: 75, question: "Evaluate ∫_0^1 (1/(1+x)) dx.", answer: "\ln 2.", concept: "ln|1+x| from 0 to 1." },
            { id: 76, question: "Evaluate ∫_0^1 x/(1+x^2) dx.", answer: "(1/2) \ln 2.", concept: "Substitute u=1+x^2." },
            { id: 77, question: "Evaluate ∫_0^1 1/(1+x^2) dx.", answer: "\tan^{-1} 1 − \tan^{-1} 0 = \pi/4.", concept: "Arctan bounds." },
            { id: 78, question: "Evaluate ∫_0^{\pi/2} \ln(\sin x) dx (result).", answer: "−(\pi/2) \ln 2.", concept: "Use property with f(\pi/2−x)." },

            // --- APPLICATION/SELECTION OF METHODS ---
            { id: 79, question: "How to choose a method (substitution/parts/partials)?", answer: "Look for chain rule patterns ⇒ substitution; products ⇒ parts; rational ⇒ partial fractions; trig ⇒ identities.", concept: "Pattern recognition speeds solving." },
            { id: 80, question: "Checklist for definite integrals.", answer: "1) Simplify integrand; 2) Try properties/symmetry; 3) Choose method; 4) Change limits correctly; 5) Evaluate and simplify.", concept: "Structured approach reduces errors." }
        ,
            // --- VIVA FOCUS: PROPERTIES & STANDARD TACTICS ---
            { id: 81, question: "Periodicity property for definite integrals.", answer: "If f has period T, then ∫_{a}^{a+T} f(x) dx = ∫_{0}^{T} f(x) dx.", concept: "Shift of limits by period doesn't change value." },
            { id: 82, question: "Standard substitution map for quadratic roots.", answer: "x=a\sin t for a^2−x^2; x=a\tan t for a^2+x^2; x=a\sec t for x^2−a^2.", concept: "Choose trig to simplify square roots." },
            { id: 83, question: "Reduction formula (example) for ∫ \sin^n x dx.", answer: "I_n = −\sin^{n−1}x\cos x/n + (n−1)/n · I_{n−2}.", concept: "Derive via by-parts with u=\sin^{n−1}x, dv=\sin x dx." },
            { id: 84, question: "Evaluate ∫_0^{\pi/2} \sin^m x \cos^n x dx (parity tip).", answer: "If m odd: strip one sin and use u=\cos x; if n odd: strip one cos and use u=\sin x; if both even: use half-angle.", concept: "Selection rule to reduce integrals quickly." },
            { id: 85, question: "Property for split around midpoint a/2.", answer: "∫_0^a f(x) dx = ∫_0^a f(a−x) dx.", concept: "Use substitution x→a−x; handy for symmetric forms." },
            { id: 86, question: "Integrals of even/odd functions over symmetric limits.", answer: "Even: 2∫_0^a f(x) dx; Odd: 0.", concept: "Exploit symmetry on [−a,a]." },
            { id: 87, question: "When to choose partial fractions vs by-parts.", answer: "Rational functions ⇒ partial fractions; products of algebraic with e^x/sin/cos ⇒ by-parts per LIATE.", concept: "Pattern recognition cheat-sheet." },
            { id: 88, question: "Evaluation trick: pair f(x) with f(a+b−x).", answer: "Set I=∫_a^b f(x)dx and also I=∫_a^b f(a+b−x)dx; add to simplify x terms.", concept: "Removes linear x factors commonly." }
        ]
    },
    "inverse_trig": {
        title: "Inverse Trigonometric Functions",
        questions: [
            // --- DEFINITIONS & PRINCIPAL VALUES ---
            { id: 1, question: "What is an inverse trigonometric function?", answer: "It reverses a trigonometric function on a suitable restricted (one-one) domain to make the inverse well-defined.", concept: "We restrict trig functions to principal intervals to define inverses." },
            { id: 2, question: "Principal value range of sin^{-1}x (arcsin x).", answer: "[−π/2, π/2]", concept: "Monotonic interval of sin x used to define inverse." },
            { id: 3, question: "Principal value range of cos^{-1}x (arccos x).", answer: "[0, π]", concept: "Cos x is one-one on [0,π]." },
            { id: 4, question: "Principal value range of tan^{-1}x (arctan x).", answer: "(−π/2, π/2)", concept: "Tan x is one-one between the vertical asymptotes." },
            { id: 5, question: "Principal value range of cot^{-1}x (arccot x).", answer: "(0, π)", concept: "Conventional principal branch excludes 0 and π." },
            { id: 6, question: "Principal value range of sec^{-1}x (arcsec x).", answer: "[0, π] \ {π/2}", concept: "Exclude where sec undefined; choose values with cos in [−1,1]." },
            { id: 7, question: "Principal value range of csc^{-1}x (arccsc x).", answer: "[−π/2, π/2] \ {0}", concept: "Exclude 0 where csc undefined." },
            { id: 8, question: "Domain of sin^{-1}x and cos^{-1}x.", answer: "[−1, 1]", concept: "Sine and cosine outputs lie in [−1,1]." },
            { id: 9, question: "Domain of tan^{-1}x and cot^{-1}x.", answer: "All real numbers R", concept: "Tan and cot take all real values as outputs of original functions." },
            { id: 10, question: "Domain of sec^{-1}x and csc^{-1}x.", answer: "|x| ≥ 1", concept: "Sec and csc output magnitudes ≥ 1." },

            // --- BASIC RELATIONS WITH DIRECT TRIG ---
            { id: 11, question: "State sin(sin^{-1} x).", answer: "x for x ∈ [−1,1].", concept: "Direct function of its inverse returns the input in domain." },
            { id: 12, question: "State sin^{-1}(sin y).", answer: "Principal value of y mapped into [−π/2, π/2].", concept: "Equal to y only if y in principal range; otherwise adjust by periodicity and symmetry." },
            { id: 13, question: "State cos(cos^{-1} x).", answer: "x for x ∈ [−1,1].", concept: "Direct with inverse." },
            { id: 14, question: "State cos^{-1}(cos y).", answer: "Principal value in [0,π] co-terminal with y.", concept: "Equal to y if y∈[0,π]; else reflected accordingly." },
            { id: 15, question: "State tan(tan^{-1} x).", answer: "x for x∈R.", concept: "Direct with inverse." },
            { id: 16, question: "State tan^{-1}(tan y).", answer: "Principal value in (−π/2, π/2).", concept: "Equal to y only if y in principal interval; else reduce modulo π." },

            // --- ODD/EVEN & SYMMETRIES ---
            { id: 17, question: "Is sin^{-1}x odd or even?", answer: "Odd: sin^{-1}(−x) = −sin^{-1}x.", concept: "Sine is odd on principal branch." },
            { id: 18, question: "Is tan^{-1}x odd or even?", answer: "Odd: tan^{-1}(−x) = −tan^{-1}x.", concept: "Arctan inherits oddness." },
            { id: 19, question: "Relation for cos^{-1}(−x).", answer: "cos^{-1}(−x) = π − cos^{-1}x.", concept: "Cos is even; inverse reflects about π/2." },
            { id: 20, question: "Relation for cot^{-1}(−x).", answer: "cot^{-1}(−x) = π − cot^{-1}x.", concept: "Principal range (0,π) gives reflection." },
            { id: 21, question: "Relation for sec^{-1}(−x), x≥1.", answer: "sec^{-1}(−x) = π − sec^{-1}x.", concept: "Use cos symmetry with principal exclusion of π/2." },
            { id: 22, question: "Relation for csc^{-1}(−x), x≥1.", answer: "csc^{-1}(−x) = −csc^{-1}x.", concept: "Principal range is symmetric about 0 (excluding 0)." },

            // --- CONVERSION IDENTITIES ---
            { id: 23, question: "Express sin^{-1}x in terms of tan^{-1}.", answer: "sin^{-1}x = tan^{-1}\Big(\frac{x}{\sqrt{1−x^2}}\Big), |x|<1.", concept: "Right triangle relation." },
            { id: 24, question: "Express cos^{-1}x in terms of tan^{-1}.", answer: "cos^{-1}x = tan^{-1}\Big(\frac{\sqrt{1−x^2}}{x}\Big) for x>0; add π for x<0.", concept: "Quadrant adjustment needed." },
            { id: 25, question: "Express tan^{-1}x in terms of sin^{-1}.", answer: "tan^{-1}x = sin^{-1}\Big(\frac{x}{\sqrt{1+x^2}}\Big).", concept: "x = tan θ ⇒ sin θ = x/√(1+x^2)." },
            { id: 26, question: "Express tan^{-1}x in terms of cos^{-1}.", answer: "tan^{-1}x = cos^{-1}\Big(\frac{1}{\sqrt{1+x^2}}\Big).", concept: "x=tan θ ⇒ cos θ = 1/√(1+x^2)." },

            // --- COMPLEMENTARY SUM IDENTITIES ---
            { id: 27, question: "State sin^{-1}x + cos^{-1}x.", answer: "π/2 (for x ∈ [−1,1]).", concept: "Complementary angles on principal ranges." },
            { id: 28, question: "State tan^{-1}x + cot^{-1}x.", answer: "π/2 for x>0; for x<0, principal value handling may differ by convention.", concept: "Typically take sum = π/2 for x>0 on standard branches." },
            { id: 29, question: "State sec^{-1}|x| + csc^{-1}|x| relation.", answer: "sec^{-1}|x| + csc^{-1}|x| = π/2 for |x|≥1.", concept: "From complementary angles of cos and sin." },

            // --- ADDITION/SUBTRACTION FORMULAE ---
            { id: 30, question: "Formula for sin^{-1}x ± sin^{-1}y.", answer: "sin^{-1}x ± sin^{-1}y = sin^{-1}(x\sqrt{1−y^2} ± y\sqrt{1−x^2}), with suitable range adjustment.", concept: "Ensure RHS lies in [−1,1]; adjust principal value if needed." },
            { id: 31, question: "Formula for cos^{-1}x ± cos^{-1}y.", answer: "cos^{-1}x ± cos^{-1}y = cos^{-1}(xy ∓ \sqrt{(1−x^2)(1−y^2)}), with range considerations.", concept: "Signs switch under cos identity." },
            { id: 32, question: "Formula for tan^{-1}x + tan^{-1}y (xy<1).", answer: "tan^{-1}x + tan^{-1}y = tan^{-1}\Big(\frac{x+y}{1−xy}\Big).", concept: "Additive arctan identity; adjust by ±π when necessary." },
            { id: 33, question: "Formula for tan^{-1}x − tan^{-1}y (xy>−1).", answer: "= tan^{-1}\Big(\frac{x−y}{1+xy}\Big).", concept: "Principal value handling by quadrant." },

            // --- MULTIPLE-ANGLE INVERSE FORMULAE ---
            { id: 34, question: "Formula for 2 sin^{-1}x.", answer: "2 sin^{-1}x = sin^{-1}(2x\sqrt{1−x^2}) (|x|≤1/\sqrt{2}); otherwise adjust using π−sin^{-1}(⋯).", concept: "Use sin(2θ)=2sinθ cosθ with principal range adjustments." },
            { id: 35, question: "Formula for 2 cos^{-1}x.", answer: "2 cos^{-1}x = cos^{-1}(2x^2−1).", concept: "Use cos(2θ)=2cos^2θ−1 with principal range." },
            { id: 36, question: "Formula for 2 tan^{-1}x.", answer: "2 tan^{-1}x = tan^{-1}\Big(\frac{2x}{1−x^2}\Big) with adjustments if denominator ≤0.", concept: "Use tan(2θ) identity and principal value handling." },
            { id: 37, question: "Formula for 3 tan^{-1}x.", answer: "3 tan^{-1}x = tan^{-1}\Big(\frac{3x − x^3}{1 − 3x^2}\Big) with quadrant adjustments.", concept: "From tan(3θ) identity." },

            // --- DOMAIN/RANGE OF CLASS-11 TRIG FUNCTIONS (RECAP) ---
            { id: 38, question: "Domain and range of sin x.", answer: "Domain: R; Range: [−1,1].", concept: "Periodic with amplitude 1." },
            { id: 39, question: "Domain and range of cos x.", answer: "Domain: R; Range: [−1,1].", concept: "Even function." },
            { id: 40, question: "Domain and range of tan x.", answer: "Domain: R \ { (2k+1)π/2 }; Range: R.", concept: "Vertical asymptotes at odd multiples of π/2." },
            { id: 41, question: "Domain and range of cot x.", answer: "Domain: R \ { kπ }; Range: R.", concept: "Undefined at multiples of π." },
            { id: 42, question: "Domain and range of sec x.", answer: "Domain: R \ { (2k+1)π/2 }; Range: (−∞,−1] ∪ [1,∞).", concept: "Reciprocal of cos." },
            { id: 43, question: "Domain and range of csc x.", answer: "Domain: R \ { kπ }; Range: (−∞,−1] ∪ [1,∞).", concept: "Reciprocal of sin." },

            // --- PRINCIPAL VALUE EVALUATIONS ---
            { id: 44, question: "Evaluate sin^{-1}(1/2).", answer: "π/6.", concept: "Principal value in [−π/2, π/2]." },
            { id: 45, question: "Evaluate cos^{-1}(−√3/2).", answer: "5π/6.", concept: "Value in [0,π]." },
            { id: 46, question: "Evaluate tan^{-1}(1).", answer: "π/4.", concept: "Principal value in (−π/2, π/2)." },
            { id: 47, question: "Evaluate cot^{-1}(1).", answer: "π/4 (by convention range (0,π)).", concept: "Some texts take cot^{-1}1 = π/4." },
            { id: 48, question: "Evaluate sec^{-1}(−2).", answer: "sec^{-1}(−2) = π − sec^{-1}(2) = π − π/3 = 2π/3.", concept: "Use symmetry with principal range exclusion of π/2." },
            { id: 49, question: "Evaluate csc^{-1}(−2).", answer: "= −csc^{-1}(2) = −π/6.", concept: "Odd symmetry on principal range." },

            // --- COMPOSITE & MIXED RELATIONS ---
            { id: 50, question: "Simplify cos^{-1}(\sqrt{1−x^2}).", answer: "= sin^{-1}x for x∈[−1,1].", concept: "Right triangle relation." },
            { id: 51, question: "Simplify sin^{-1}\Big(\frac{2x}{1+x^2}\Big) for x>0.", answer: "= 2 tan^{-1}x − π/2 (with principal value).", concept: "Use t = tan^{-1}x; sin(2t) = 2tan t/(1+tan^2 t)." },
            { id: 52, question: "Express tan^{-1}x + tan^{-1}\frac{1}{x} (x>0).", answer: "= π/2.", concept: "Arctan complementary relation for positive x." },
            { id: 53, question: "Express tan^{-1}x + tan^{-1}\frac{1}{x} (x<0).", answer: "= −π/2.", concept: "Principal value adjustment for negative x." },
            { id: 54, question: "Simplify sin^{-1}x + sin^{-1}\sqrt{1−x^2} for x∈[0,1].", answer: "= π/2.", concept: "Complementary arcsin values in first quadrant." },
            { id: 55, question: "Simplify cos^{-1}x + cos^{-1}\sqrt{1−x^2} for x∈[0,1].", answer: "= π/2.", concept: "Complementary arccos values." },

            // --- INEQUALITIES & MONOTONICITY ---
            { id: 56, question: "Monotonicity of sin^{-1}x on [−1,1].", answer: "Strictly increasing.", concept: "Derivative 1/√(1−x^2) > 0." },
            { id: 57, question: "Monotonicity of cos^{-1}x on [−1,1].", answer: "Strictly decreasing.", concept: "Derivative −1/√(1−x^2) < 0." },
            { id: 58, question: "Monotonicity of tan^{-1}x on R.", answer: "Strictly increasing.", concept: "Derivative 1/(1+x^2) > 0." },
            { id: 59, question: "Range of tan^{-1}x as x→±∞.", answer: "Approaches ±π/2 (horizontal asymptotes).", concept: "S-shaped arctan curve." },
            { id: 60, question: "Solve range of sin^{-1}x + cos^{-1}x.", answer: "Constant π/2 for x∈[−1,1].", concept: "Independence of x within domain." }
        ,
            // --- VIVA FOCUS: QUADRANT ADJUSTMENTS & IDENTITIES ---
            { id: 61, question: "When to add ±π in tan^{-1}x + tan^{-1}y.", answer: "Use tan^{-1}\Big(\frac{x+y}{1−xy}\Big) if denominator > 0; add π if numerator>0 and denominator<0; subtract π if numerator<0 and denominator<0.", concept: "Principal value adjustment by quadrant of resultant angle." },
            { id: 62, question: "Simplify tan^{-1}x − tan^{-1}y.", answer: "= tan^{-1}\Big(\frac{x−y}{1+xy}\Big) with adjustments if 1+xy≤0.", concept: "Check sign of denominator for principal value." },
            { id: 63, question: "Simplify sin^{-1}(x) + sin^{-1}(y) identity.", answer: "= sin^{-1}(x\sqrt{1−y^2} + y\sqrt{1−x^2}) with range adjustment if sum exceeds principal range.", concept: "Ensure RHS lies in [−1,1] and adjust to principal value." },
            { id: 64, question: "Express cos^{-1}x + cos^{-1}y.", answer: "= cos^{-1}(xy − \sqrt{(1−x^2)(1−y^2)}) with range care.", concept: "Choose sign consistent with principal values." },
            { id: 65, question: "Composite simplification: sin^{-1}(\cos x).", answer: "= \frac{\pi}{2} − (x \bmod 2\pi) mapped to [−\pi/2,\pi/2] with sign adjustments.", concept: "Reduce x to principal window; answer depends on quadrant of x." },
            { id: 66, question: "Composite simplification: cos^{-1}(\sin x).", answer: "= \frac{\pi}{2} − (x \bmod 2\pi) mapped to [0,\pi] with quadrant care.", concept: "Map to principal branch of arccos via complementary angles." }
        ]
    },
    "relations_functions": {
        title: "Relations & Functions",
        questions: [
            // --- RELATIONS: BASICS ---
            { id: 1, question: "What is a relation from A to B?", answer: "Any subset R ⊆ A×B.", concept: "Pairs (a,b) with a∈A, b∈B." },
            { id: 2, question: "Define domain and range of a relation R ⊆ A×B.", answer: "Dom(R) = {a∈A | ∃b (a,b)∈R}, Ran(R) = {b∈B | ∃a (a,b)∈R}.", concept: "Also define image of a under R." },
            { id: 3, question: "Identity, empty and universal relations on a set A.", answer: "I_A = {(a,a)}; ∅; A×A.", concept: "Identity relates each element to itself." },
            { id: 4, question: "Reflexive relation on A.", answer: "(a,a)∈R for all a∈A.", concept: "Every element related to itself." },
            { id: 5, question: "Symmetric relation.", answer: "(a,b)∈R ⇒ (b,a)∈R.", concept: "Pairs reversible." },
            { id: 6, question: "Transitive relation.", answer: "(a,b)∈R and (b,c)∈R ⇒ (a,c)∈R.", concept: "Links compose." },
            { id: 7, question: "Antisymmetric relation.", answer: "(a,b)∈R and (b,a)∈R ⇒ a=b.", concept: "Allows (a,b) and (b,a) only when equal." },
            { id: 8, question: "Equivalence relation.", answer: "Reflexive, symmetric, and transitive.", concept: "Partitions the set into equivalence classes." },
            { id: 9, question: "What is an equivalence class [a]?", answer: "[a] = {x∈A | x~a}.", concept: "Two elements equivalent iff they lie in same class." },
            { id: 10, question: "Example of an equivalence relation on ℤ.", answer: "Congruence mod n: a~b ⇔ n | (a−b).", concept: "Classes are residue classes 0,…,n−1." },
            { id: 11, question: "Does an equivalence relation define a partition?", answer: "Yes, equivalence classes are disjoint and their union is the whole set.", concept: "Each element belongs to exactly one class." },
            { id: 12, question: "Inverse relation R^{-1}.", answer: "R^{-1} = {(b,a) | (a,b)∈R}.", concept: "Swap coordinates of ordered pairs." },
            { id: 13, question: "Composition of relations S∘R.", answer: "(a,c)∈S∘R if ∃b with (a,b)∈R and (b,c)∈S.", concept: "Associative: (T∘S)∘R = T∘(S∘R)." },
            { id: 14, question: "How many relations on a finite set A (|A|=n)?", answer: "2^{n^2}.", concept: "Any subset of A×A; |A×A| = n^2." },
            { id: 15, question: "Test for reflexivity using relation matrix.", answer: "All diagonal entries must be 1.", concept: "Matrix M_R has m_{ii}=1 ∀i." },
            { id: 16, question: "Test for symmetry using matrix.", answer: "M_R = M_R^T.", concept: "Matrix equals its transpose." },
            { id: 17, question: "Give an example of a transitive but not symmetric relation on ℝ.", answer: "≤ on ℝ.", concept: "a≤b and b≤c ⇒ a≤c; not symmetric unless a=b." },
            { id: 18, question: "Give an example of symmetric but not transitive relation.", answer: "R on ℝ: aRb if |a−b|=1.", concept: "aRb and bRc need not imply aRc." },
            { id: 19, question: "Is equality relation an equivalence relation?", answer: "Yes.", concept: "Reflexive, symmetric, transitive." },
            { id: 20, question: "Is parallelism of lines in a plane an equivalence relation?", answer: "Yes (excluding coincident? including).", concept: "Reflexive, symmetric, transitive on set of lines." },

            // --- FUNCTIONS: BASICS ---
            { id: 21, question: "Define a function f from A to B.", answer: "A relation with uniqueness: every a∈A has exactly one image f(a)∈B.", concept: "Denoted f: A→B." },
            { id: 22, question: "Define domain, codomain, and range of f.", answer: "Dom(f)=A, Cod(f)=B, Range(f)={f(a)|a∈A} ⊆ B.", concept: "Range may be proper subset of codomain." },
            { id: 23, question: "What is a real-valued function?", answer: "A function whose codomain is ℝ.", concept: "Often both domain and codomain are subsets of ℝ." },
            { id: 24, question: "Define one-to-one (injective).", answer: "Distinct inputs map to distinct outputs.", concept: "f(a1)=f(a2) ⇒ a1=a2." },
            { id: 25, question: "Define many-to-one.", answer: "Two or more inputs map to the same output.", concept: "Not injective." },
            { id: 26, question: "Define onto (surjective).", answer: "Range(f) = Codomain(f).", concept: "Every element of codomain has a preimage." },
            { id: 27, question: "Define into function.", answer: "Range is a proper subset of codomain.", concept: "Not surjective." },
            { id: 28, question: "Define bijection.", answer: "Both injective and surjective.", concept: "Has a two-sided inverse." },
            { id: 29, question: "When is a function invertible?", answer: "Iff it is bijective.", concept: "Inverse f^{-1}: B→A exists and is unique." },
            { id: 30, question: "Left and right inverses.", answer: "Left inverse exists ⇒ f injective; Right inverse exists ⇒ f surjective.", concept: "If both exist and are functions ⇒ f bijective." },
            { id: 31, question: "Composition of functions.", answer: "(g∘f)(x)=g(f(x)).", concept: "Associative: h∘(g∘f)=(h∘g)∘f; identity I satisfies f∘I=I∘f=f." },
            { id: 32, question: "Identity and constant functions.", answer: "I_A(a)=a; c(x)=k constant.", concept: "I is bijective; constant is many-to-one and into (unless trivial)." },
            { id: 33, question: "Horizontal line test.", answer: "Graph passes horizontal line at most once ⇒ injective.", concept: "Visual test for one-to-one." },
            { id: 34, question: "Vertical line test.", answer: "Curve is a function iff every vertical line meets it at most once.", concept: "Uniqueness of output for each x." },
            { id: 35, question: "How to make y=x^2 invertible?", answer: "Restrict domain to [0,∞) or (−∞,0].", concept: "Then inverse is y=√x or y=−√x." },
            { id: 36, question: "Condition using calculus for injectivity on interval.", answer: "If f' keeps a fixed sign on interval, f is strictly monotonic ⇒ injective.", concept: "12th-grade criterion." },

            // --- DOMAIN/RANGE OF COMMON FUNCTIONS (CLASS 11 & 12) ---
            { id: 37, question: "Domain/range of linear function ax+b (a≠0).", answer: "Domain: ℝ; Range: ℝ.", concept: "Surjective onto ℝ." },
            { id: 38, question: "Domain/range of polynomial P(x).", answer: "Domain: ℝ; Range: depends on degree and coefficients.", concept: "Quadratic range is [min,∞) or (−∞,max]." },
            { id: 39, question: "Domain/range of rational function P(x)/Q(x).", answer: "Domain: ℝ\{roots of Q}; Range: ℝ possibly minus forbidden values; analyze via equation y=P/Q.", concept: "Vertical/horizontal asymptotes matter." },
            { id: 40, question: "Domain/range of 1/x.", answer: "Domain: ℝ\{0}; Range: ℝ\{0}.", concept: "Hyperbola branches." },
            { id: 41, question: "Domain/range of |x|.", answer: "Domain: ℝ; Range: [0,∞).", concept: "Even function; V-shaped graph." },
            { id: 42, question: "Domain/range of signum sgn(x).", answer: "Domain: ℝ; Range: {−1,0,1}.", concept: "Piecewise constant by sign of x." },
            { id: 43, question: "Domain/range of greatest integer [x].", answer: "Domain: ℝ; Range: ℤ.", concept: "Step function; discontinuous at integers." },
            { id: 44, question: "Domain/range of fractional part {x} = x−[x].", answer: "Domain: ℝ; Range: [0,1).", concept: "Periodic with period 1." },
            { id: 45, question: "Domain/range of √(ax+b) (a>0).", answer: "Domain: x ≥ −b/a; Range: [0,∞).", concept: "Even root demands non-negative radicand." },
            { id: 46, question: "Domain/range of (ax+b)^{1/n} (n even).", answer: "Domain: ax+b ≥ 0; Range: [0,∞).", concept: "Real even roots need non-negative argument." },
            { id: 47, question: "Domain/range of (ax+b)^{1/n} (n odd).", answer: "Domain: ℝ; Range: ℝ.", concept: "Odd roots defined for all reals." },
            { id: 48, question: "Domain/range of exponential a^x (a>0,a≠1).", answer: "Domain: ℝ; Range: (0,∞).", concept: "Strictly monotonic; inverse is log base a." },
            { id: 49, question: "Domain/range of logarithm log_a x (a>0,a≠1).", answer: "Domain: (0,∞); Range: ℝ.", concept: "Inverse of a^x." },
            { id: 50, question: "Domain/range of sin x, cos x.", answer: "Domain: ℝ; Range: [−1,1].", concept: "Periodic with period 2π." },
            { id: 51, question: "Domain/range of tan x, cot x.", answer: "tan: Dom ℝ\{(2k+1)π/2}, Range ℝ; cot: Dom ℝ\{kπ}, Range ℝ.", concept: "Period π." },
            { id: 52, question: "Domain/range of sec x, csc x.", answer: "sec: Dom ℝ\{(2k+1)π/2}, Range (−∞,−1]∪[1,∞); csc: Dom ℝ\{kπ}, same range.", concept: "Reciprocals of cos and sin." },
            { id: 53, question: "Principal domains/ranges for inverse trig (summary).", answer: "arcsin: Dom [−1,1], Ran [−π/2,π/2]; arccos: [−1,1]→[0,π]; arctan: ℝ→(−π/2,π/2); arccot: ℝ→(0,π); arcsec: |x|≥1→[0,π]\{π/2}; arccsc: |x|≥1→[−π/2,π/2]\{0}.", concept: "As per principal value conventions." },
            { id: 54, question: "Domain/range of piecewise-defined function.", answer: "Domain is union of pieces' domains; range computed piecewise then union.", concept: "Careful at join points." },
            { id: 55, question: "Even and odd functions (definition).", answer: "Even: f(−x)=f(x); Odd: f(−x)=−f(x).", concept: "Even → y-axis symmetry; Odd → origin symmetry." },
            { id: 56, question: "Periodicity of a function.", answer: "f(x+T)=f(x) for all x; least positive T is period.", concept: "sin, cos have period 2π; tan, cot have π." },
            { id: 57, question: "Testing surjectivity (onto) algebraically.", answer: "Solve y=f(x) for x; if solution exists for every y in codomain, f is onto.", concept: "Choose codomain wisely." },
            { id: 58, question: "Testing injectivity without calculus.", answer: "Assume f(x1)=f(x2) and deduce x1=x2.", concept: "Algebraic manipulation or monotonic reasoning." },
            { id: 59, question: "Graph of |ax+b| from ax+b.", answer: "Reflect negative part of line about x-axis.", concept: "V-shape centered at root x=−b/a." },
            { id: 60, question: "Invertible functions among listed types.", answer: "Linear (a≠0) is bijective ℝ→ℝ; quadratic not invertible on ℝ but invertible on restricted intervals; exponential/log are bijections between ℝ and (0,∞)/(0,∞) and ℝ.", concept: "Bijection depends on domain/codomain selection." }
        ,
            // --- VIVA FOCUS: COUNTING & COMPOSITION PROPERTIES ---
            { id: 61, question: "Number of functions from A to B with |A|=m, |B|=n.", answer: "n^m.", concept: "Each of m elements chooses any of n images independently." },
            { id: 62, question: "Number of one-one (injective) functions A→B (|A|=m ≤ n).", answer: "nP m = n!/(n−m)!.", concept: "Distinct images for m inputs (arrangements)." },
            { id: 63, question: "Number of onto (surjective) functions A→B (|A|=m ≥ n).", answer: "n!·S(m,n) where S(m,n) are Stirling numbers of the second kind.", concept: "Partition domain into n non-empty preimages, then assign to n codomain points." },
            { id: 64, question: "Number of bijections A↔B when |A|=|B|=n.", answer: "n!.", concept: "Permutations of n elements." },
            { id: 65, question: "Inverse of composition (when bijective).", answer: "(g∘f)^{-1} = f^{-1} ∘ g^{-1}.", concept: "Order reverses for inverses." },
            { id: 66, question: "Image and preimage of sets under f.", answer: "f(S) = {f(x): x∈S}; f^{-1}(T) = {x: f(x)∈T}.", concept: "Monotonicities: S1⊆S2 ⇒ f(S1)⊆f(S2); T1⊆T2 ⇒ f^{-1}(T1)⊆f^{-1}(T2)." },
            { id: 67, question: "Preimage of union and intersection.", answer: "f^{-1}(A∪B)=f^{-1}(A)∪f^{-1}(B); f^{-1}(A∩B)=f^{-1}(A)∩f^{-1}(B).", concept: "Preimage preserves set operations; image preserves unions but not always intersections." },
            { id: 68, question: "Composition injectivity/surjectivity rules.", answer: "If f,g injective ⇒ g∘f injective; if f,g surjective ⇒ g∘f surjective.", concept: "Proof via definitions; bijections closed under composition." },
            { id: 69, question: "Left/right inverses implication.", answer: "Existence of left inverse ⇒ f injective; right inverse ⇒ f surjective.", concept: "Viva recall of quick tests for invertibility components." },
            { id: 70, question: "Equality of functions criterion.", answer: "Same domain, codomain, and f(x)=g(x) for all x in domain.", concept: "Graph equality is necessary but domain/codomain must also match in definition." }
        ]
    }
    ,
    "vectors": {
        title: "Vectors",
        questions: [
            // --- BASICS & TERMINOLOGY ---
            { id: 1, question: "What is a vector?", answer: "A quantity having both magnitude and direction, represented by a directed line segment.", concept: "Contrasts with a scalar which has only magnitude." },
            { id: 2, question: "What is a scalar?", answer: "A quantity with magnitude only (no direction).", concept: "Examples: mass, temperature, time." },
            { id: 3, question: "Magnitude and direction of a vector.", answer: "Magnitude |a| is the length of the directed segment; direction is the orientation of the segment.", concept: "If a is non-zero, its unit vector is a/|a|." },
            { id: 4, question: "What are direction ratios (d.r.s) of a vector in 3D?", answer: "Any triple proportional to its components along x, y, z, usually denoted (l1, m1, n1).", concept: "Direction cosines are normalized d.r.s." },
            { id: 5, question: "What are direction cosines (d.c.s)?", answer: "Cosines of angles that the vector makes with positive x, y, z axes: (l, m, n).", concept: "For a unit vector, l^2 + m^2 + n^2 = 1." },
            { id: 6, question: "Relation between direction ratios (a,b,c) and direction cosines (l,m,n).", answer: "(l,m,n) = (a,b,c)/√(a^2+b^2+c^2).", concept: "Normalize the d.r.s to obtain d.c.s." },

            // --- TYPES OF VECTORS ---
            { id: 7, question: "Equal vectors.", answer: "Vectors with same magnitude and same direction (parallel, same sense).", concept: "Independent of initial position (free vectors)." },
            { id: 8, question: "Unit vector.", answer: "A vector of magnitude 1 in the direction of a given vector.", concept: "\u005ea = a/|a| (when a≠0)." },
            { id: 9, question: "Zero (null) vector.", answer: "Vector with zero magnitude and undefined direction.", concept: "Acts as additive identity in vector addition." },
            { id: 10, question: "Negative of a vector.", answer: "Vector with same magnitude but opposite direction to the given vector.", concept: "a + (−a) = 0." },
            { id: 11, question: "Parallel and collinear vectors.", answer: "Parallel: scalar multiples; Collinear: act along the same or exactly opposite line.", concept: "In 3D, parallel implies cross product zero." },

            // --- REPRESENTATION & COMPONENTS ---
            { id: 12, question: "Standard unit vectors.", answer: "i, j, k along positive x, y, z axes respectively.", concept: "Any vector a = a_x i + a_y j + a_z k." },
            { id: 13, question: "Position vector of a point P(x,y,z).", answer: "\u2192OP = x i + y j + z k with respect to origin O.", concept: "From O to P; depends on chosen origin." },
            { id: 14, question: "Vector from A(x1,y1,z1) to B(x2,y2,z2).", answer: "\u2192AB = (x2−x1) i + (y2−y1) j + (z2−z1) k.", concept: "Difference of position vectors: r_B − r_A." },
            { id: 15, question: "Magnitude of a = a_x i + a_y j + a_z k.", answer: "|a| = √(a_x^2 + a_y^2 + a_z^2).", concept: "Euclidean norm in 3D." },
            { id: 16, question: "Direction cosines of a in terms of components.", answer: "(l,m,n) = (a_x/|a|, a_y/|a|, a_z/|a|).", concept: "l^2 + m^2 + n^2 = 1." },

            // --- VECTOR ADDITION & SCALAR MULTIPLICATION ---
            { id: 17, question: "Triangle law of addition.", answer: "If \u2192AB = a and \u2192BC = b, then \u2192AC = a + b.", concept: "Place tail of b at head of a." },
            { id: 18, question: "Parallelogram law.", answer: "Sum a+b is the diagonal of the parallelogram on a and b.", concept: "Geometrical interpretation of addition." },
            { id: 19, question: "Properties of vector addition.", answer: "Commutative and associative; zero vector acts as identity; negative gives inverse.", concept: "a+b=b+a; (a+b)+c=a+(b+c)." },
            { id: 20, question: "Scalar multiplication ka.", answer: "Stretches magnitude by |k| and reverses direction if k<0.", concept: "|ka| = |k||a|; direction along a for k>0, opposite for k<0." },

            // --- SECTION FORMULA ---
            { id: 21, question: "Section formula (internal).", answer: "Point dividing AB in ratio m:n (internal) has position vector (n a + m b)/(m+n).", concept: "a=\u2192OA, b=\u2192OB." },
            { id: 22, question: "Section formula (external).", answer: "Point dividing AB externally in ratio m:n has r = (n a − m b)/(n−m) (n≠m).", concept: "Handles external division on line AB." },
            { id: 23, question: "Midpoint formula (vector form).", answer: "r_M = (a + b)/2.", concept: "Special case m=n=1." },

            // --- DOT (SCALAR) PRODUCT ---
            { id: 24, question: "Define dot (scalar) product.", answer: "a·b = |a||b| cosθ = a_x b_x + a_y b_y + a_z b_z.", concept: "θ is angle between a and b (0≤θ≤π)." },
            { id: 25, question: "Geometrical meaning of a·b.", answer: "|a| times component of b along a (or vice versa).", concept: "a·b = |a| |b| cosθ = |a| (b's projection on a)." },
            { id: 26, question: "Angle between two vectors via dot product.", answer: "cosθ = (a·b)/(|a||b|).", concept: "Use when both magnitudes non-zero." },
            { id: 27, question: "Orthogonality condition.", answer: "a ⟂ b ⇔ a·b = 0 (for non-zero a,b).", concept: "Zero dot product implies right angle." },
            { id: 28, question: "Properties of dot product.", answer: "Commutative, distributive over addition, and compatible with scalar multiplication.", concept: "a·b = b·a; a·(b+c)=a·b+a·c; (ka)·b = k(a·b)." },
            { id: 29, question: "Projection (scalar) of b on a.", answer: "comp_a b = (a·b)/|a|.", concept: "Signed length along a." },
            { id: 30, question: "Projection (vector) of b on a.", answer: "proj_a b = [(a·b)/|a|^2] a.", concept: "Vector along a with projected magnitude." },

            // --- CROSS (VECTOR) PRODUCT ---
            { id: 31, question: "Define cross (vector) product.", answer: "a×b is a vector perpendicular to both a and b with |a×b| = |a||b| sinθ; direction by right-hand rule.", concept: "Component form via determinant | i  j  k; a_x a_y a_z; b_x b_y b_z |." },
            { id: 32, question: "Properties of cross product.", answer: "Anticommutative, distributive over addition, scalar associative.", concept: "a×b = −(b×a); a×(b+c)=a×b+a×c; (ka)×b = k(a×b)." },
            { id: 33, question: "Condition for parallel vectors using cross product.", answer: "a ∥ b ⇔ a×b = 0 (with non-zero a or b).", concept: "Zero cross product implies sinθ=0." },
            { id: 34, question: "Area of parallelogram formed by a and b.", answer: "|a×b|.", concept: "Area of triangle = (1/2)|a×b|." },
            { id: 35, question: "Test for collinearity of three points using vectors.", answer: "For A,B,C, vectors AB and AC are parallel (cross product zero).", concept: "Equivalently, area of triangle ABC is zero." },

            // --- TRIPLE PRODUCTS & APPLICATIONS ---
            { id: 36, question: "Scalar triple product (STP).", answer: "[a,b,c] = a·(b×c).", concept: "Gives (signed) volume of the parallelepiped spanned by a,b,c." },
            { id: 37, question: "Properties of STP.", answer: "Cyclically symmetric, changes sign on swapping two vectors, zero if vectors coplanar.", concept: "[a,b,c]=[b,c,a]=[c,a,b]; swapping any two changes sign; [a,b,c]=0 ⇔ coplanar." },
            { id: 38, question: "Volume formulas via STP.", answer: "Parallelepiped volume = |[a,b,c]|; Tetrahedron volume = |[a,b,c]|/6.", concept: "Geometric applications in 3D." },
            { id: 39, question: "Vector triple product identity.", answer: "a×(b×c) = (a·c)b − (a·b)c.", concept: "Bac–cab rule." },
            { id: 40, question: "Lagrange's identity.", answer: "|a×b|^2 = |a|^2|b|^2 − (a·b)^2.", concept: "Relates dot and cross products." },

            // --- EXPRESSIONS & EVALUATIONS ---
            { id: 41, question: "Expand a×(b+c).", answer: "a×b + a×c.", concept: "Distributive property of cross product." },
            { id: 42, question: "Is (a·b)×c defined?", answer: "No; a·b is scalar; cross requires two vectors.", concept: "But (a×b)·c is scalar triple product." },
            { id: 43, question: "Compute angle between vectors using components.", answer: "Use cosθ = (a_x b_x + a_y b_y + a_z b_z)/(√(a_x^2+... ) √(b_x^2+...)).", concept: "Component form of dot product." },
            { id: 44, question: "Unit vector perpendicular to both a and b.", answer: "\u005en = (a×b)/|a×b| (if a×b ≠ 0).", concept: "Direction of normal via cross product." },

            // --- MISCELLANEOUS & THEORY WRAP-UP ---
            { id: 45, question: "Express vector in terms of i, j, k.", answer: "If d.r.s proportional to (a,b,c) and magnitude r, then vector = r·(a i + b j + c k)/√(a^2+b^2+c^2).", concept: "Scale unit direction by magnitude." },
            { id: 46, question: "Angle between vector and positive x-axis.", answer: "α with cosα = a_x/|a|.", concept: "Similarly β for y, γ for z: cos^2α + cos^2β + cos^2γ = 1." },
            { id: 47, question: "Convert between direction cosines and slopes (2D).", answer: "In 2D, direction cosines reduce to (cosθ, sinθ); slope m = tanθ.", concept: "Bridge between vector direction and analytic geometry." },
            { id: 48, question: "When are three non-zero vectors coplanar?", answer: "When their scalar triple product is zero.", concept: "[a,b,c]=0 ⇔ coplanar." },
            { id: 49, question: "Work done by a constant force F moving displacement s.", answer: "W = F·s.", concept: "Physical application of dot product." },
            { id: 50, question: "Torque (moment) about origin due to force F at position r.", answer: "τ = r×F.", concept: "Direction given by right-hand screw rule." },
            { id: 51, question: "Condition for two vectors to be equal using components.", answer: "Their corresponding components are equal: a_x=b_x, a_y=b_y, a_z=b_z.", concept: "Equality independent of initial point (free vectors)." },
            { id: 52, question: "Component of a along unit vector û.", answer: "a·û.", concept: "Signed scalar projection." },
            { id: 53, question: "Express a in terms of its projections on orthonormal basis.", answer: "a = (a·i)i + (a·j)j + (a·k)k.", concept: "Coordinates equal dot products with basis vectors." },
            { id: 54, question: "Collinearity via direction ratios for A, B, C.", answer: "(x2−x1 : y2−y1 : z2−z1) is proportional to (x3−x1 : y3−y1 : z3−z1).", concept: "Equivalent to AB × AC = 0." },
            { id: 55, question: "Area of triangle ABC in coordinates.", answer: "(1/2)|AB×AC|.", concept: "Use position vectors to compute AB and AC." },
            { id: 56, question: "Area of parallelogram with adjacent sides AB and AC.", answer: "|AB×AC|.", concept: "Magnitude of cross product gives area." },
            { id: 57, question: "Express vector equation of line through A parallel to direction d.", answer: "r = a + t d, t∈ℝ.", concept: "Here a is position vector of A; d is direction vector." },
            { id: 58, question: "Express any vector as ordered triple.", answer: "a ≡ (a_x, a_y, a_z) relative to basis (i,j,k).", concept: "Coordinate representation of vectors." },
            { id: 59, question: "Right-hand rule for cross product.", answer: "Curl fingers from a to b; thumb gives direction of a×b.", concept: "Reversing order reverses direction." },
            { id: 60, question: "When is cross product undefined or zero?", answer: "Undefined never (for vectors in ℝ^3); zero when vectors are parallel or any vector is zero.", concept: "Magnitude |a×b| = 0 in these cases." },
            { id: 61, question: "Can dot product be negative?", answer: "Yes; negative when angle between vectors is obtuse (cosθ<0).", concept: "Indicates opposite component direction." },
            { id: 62, question: "State Cauchy–Schwarz inequality for vectors.", answer: "|a·b| ≤ |a||b|.", concept: "Equality iff a and b are linearly dependent." }
        ,
            // --- VIVA FOCUS: DETERMINANT FORMS & IDENTITIES ---
            { id: 63, question: "Scalar triple product in determinant form.", answer: "[a,b,c] = det\n| a_x  a_y  a_z |\n| b_x  b_y  b_z |\n| c_x  c_y  c_z |.", concept: "Signed volume; zero iff coplanar." },
            { id: 64, question: "Coplanarity test via STP.", answer: "Vectors a,b,c are coplanar ⇔ [a,b,c]=0.", concept: "Any linear dependence yields zero volume." },
            { id: 65, question: "Lagrange’s identity (expanded).", answer: "(a×b)·(c×d) = (a·c)(b·d) − (a·d)(b·c).", concept: "Useful for dot of cross products." },
            { id: 66, question: "Projection properties summary.", answer: "Scalar proj of b on a: (a·b)/|a|; Vector proj: ((a·b)/|a|^2)a.", concept: "Remember sign indicates direction along a." },
            { id: 67, question: "Area/volume quick recall.", answer: "Triangle area = (1/2)|a×b|; Parallelogram = |a×b|; Tetrahedron volume = |[a,b,c]|/6.", concept: "Direct from cross and triple products." },
            { id: 68, question: "Condition for collinearity using components of two vectors.", answer: "a ∥ b ⇔ (a_x:b_x)=(a_y:b_y)=(a_z:b_z) whenever denominators defined.", concept: "Equivalent to a×b=0." }
        ]
    }
    ,
    "three_d_geometry": {
        title: "Three-Dimensional Geometry",
        questions: [
            // --- DIRECTION RATIOS/COSINES & BASIC ANGLES ---
            { id: 1, question: "Direction cosines of a line.", answer: "Cosines (l,m,n) of angles with positive x,y,z axes; satisfy l^2+m^2+n^2=1.", concept: "For direction ratios (a,b,c), l = a/√(a^2+b^2+c^2), etc." },
            { id: 2, question: "Angle between two lines with d.r.s (a1,b1,c1) and (a2,b2,c2).", answer: "cosθ = (a1a2 + b1b2 + c1c2)/[√(a1^2+b1^2+c1^2) √(a2^2+b2^2+c2^2)].", concept: "From dot product of direction vectors." },
            { id: 3, question: "Condition for perpendicular lines (in terms of d.r.s).", answer: "a1a2 + b1b2 + c1c2 = 0.", concept: "Dot product zero." },
            { id: 4, question: "Condition for parallel lines.", answer: "Direction ratios are proportional: (a1:b1:c1) ∝ (a2:b2:c2).", concept: "Direction vectors are scalar multiples." },

            // --- CARTESIAN & VECTOR EQUATION OF A LINE ---
            { id: 5, question: "Vector equation of a line through point A with direction d.", answer: "r = a + t d, t∈ℝ.", concept: "a is position vector of A; d gives direction." },
            { id: 6, question: "Cartesian symmetric form of a line.", answer: "(x−x1)/l = (y−y1)/m = (z−z1)/n where (l,m,n) are d.r.s.", concept: "Parametric: x=x1+lt, y=y1+mt, z=z1+nt." },
            { id: 7, question: "Line through two points A(x1,y1,z1) and B(x2,y2,z2).", answer: "Direction d = (x2−x1, y2−y1, z2−z1); equation r = a + t d.", concept: "Symmetric form obtained from parametric equations." },
            { id: 8, question: "Equations of coordinate axes and lines parallel to them.", answer: "x-axis: y=0,z=0; y-axis: x=0,z=0; z-axis: x=0,y=0. Lines parallel retain two coordinates linear in t with others constant.", concept: "Direction vectors i, j, k respectively." },
            { id: 9, question: "Equation of lines parallel to coordinate planes.", answer: "Parallel to xy-plane ⇒ z constant; to yz-plane ⇒ x constant; to zx-plane ⇒ y constant.", concept: "Direction vector has zero component normal to the plane." },

            // --- COPLANAR, SKEW, AND INTERSECTION CONDITIONS ---
            { id: 10, question: "When are two lines coplanar?", answer: "If there exists a plane containing both; algebraically, (b−a)·(d1×d2) = 0 where a,b are position vectors on lines and d1,d2 their directions.", concept: "If not coplanar ⇒ skew lines." },
            { id: 11, question: "Condition for intersection of two lines in symmetric form.", answer: "Solve parametric equations and check if a common (x,y,zz) exists for some t,s.", concept: "If no common solution and not parallel ⇒ skew." },
            { id: 12, question: "Shortest distance (S.D.) between two skew lines with directions d1, d2 and points r1, r2.", answer: "Length = |( (r2−r1)·(d1×d2) )| / |d1×d2|.", concept: "Perpendicular to both lines; numerator is scalar triple product magnitude." },
            { id: 13, question: "Vector equation of the common perpendicular (shortest distance) line.", answer: "Passes through r1 + t d1 where t chosen so line is perpendicular to d2; solve using (r1 + t d1 − r2 − s d2)·d1 = 0 and ·d2 = 0.", concept: "System in parameters t and s." },
            { id: 14, question: "Distance of a point P from a line r = a + t d.", answer: "= |(AP × d)|/|d| where AP = p−a.", concept: "Area approach using cross product." },

            // --- PLANES: EQUATIONS & FORMS ---
            { id: 15, question: "Vector equation of a plane with normal n̂ and distance p from origin.", answer: "r·n̂ = p.", concept: "Normal form; |n̂|=1, p is perpendicular distance from origin." },
            { id: 16, question: "Vector one-point-normal form of a plane.", answer: "n·(r − a) = 0.", concept: "n is any normal (not necessarily unit)." },
            { id: 17, question: "Cartesian general form of a plane.", answer: "ax + by + cz + d = 0 with normal vector n = (a,b,c).", concept: "Coefficients give direction ratios of normal." },
            { id: 18, question: "Intercept form of a plane not passing through origin.", answer: "x/a + y/b + z/c = 1 (a,b,c ≠ 0).", concept: "Intercepts on axes are a,b,c respectively." },
            { id: 19, question: "Equation of plane through a point and parallel to a given plane.", answer: "If given plane is ax+by+cz+d=0, required: ax+by+cz+d' = 0 passing through point to determine d'.", concept: "Parallel planes share normal vector." },
            { id: 20, question: "Equation of plane through three non-collinear points A, B, C.", answer: "Use (r−a)·[(b−a)×(c−a)] = 0.", concept: "Normal is (AB×AC)." },

            // --- ANGLES & DISTANCES WITH PLANES ---
            { id: 21, question: "Angle between two planes ax+by+cz+d=0 and a'x+b'y+c'z+d'=0.", answer: "cosθ = |aa'+bb'+cc'| / (√(a^2+b^2+c^2) √(a'^2+b'^2+c'^2)).", concept: "Angle between normals." },
            { id: 22, question: "Angle between a line with d.r.s (l,m,n) and a plane ax+by+cz+d=0.", answer: "sinθ = |al + bm + cn| / (√(a^2+b^2+c^2) √(l^2+m^2+n^2)).", concept: "θ is angle between line and plane; complement of angle with normal." },
            { id: 23, question: "Condition for line to be parallel/perpendicular to plane.", answer: "Parallel: a l + b m + c n = 0; Perpendicular: (l,m,n) ∥ (a,b,c).", concept: "Use normal of plane and direction of line." },
            { id: 24, question: "Distance of point P(x0,y0,z0) from plane ax+by+cz+d=0.", answer: "|ax0+by0+cz0+d| / √(a^2+b^2+c^2).", concept: "Perpendicular distance formula." },
            { id: 25, question: "Foot of perpendicular from point to plane (concept).", answer: "Solve line through P along plane's normal with plane equation to get foot coordinates.", concept: "Use parametric form and substitute." },
            { id: 26, question: "Angle between line r=a+td and plane r·n = p (n unit).", answer: "sinθ = |d·n|/|d|.", concept: "Same as with Cartesian after normalization." },

            // --- LINE-PLANE INTERSECTIONS ---
            { id: 27, question: "Intersection point of line r=a+td with plane n·(r−r0)=0.", answer: "Solve for t from n·(a+td−r0)=0 ⇒ t = n·(r0−a)/(n·d).", concept: "Provided n·d ≠ 0 (line not parallel to plane)." },
            { id: 28, question: "Condition for a line to lie in a plane.", answer: "Direction of line is perpendicular to plane's normal (n·d=0) and a point of line satisfies plane equation.", concept: "Both conditions necessary." },

            // --- DISTANCES BETWEEN LINES ---
            { id: 29, question: "Distance between two parallel lines r = a + t d and r = b + s d.", answer: "= |(b−a)×d|/|d|.", concept: "Use area of parallelogram divided by base length." },
            { id: 30, question: "Condition for two lines to be the same (coincident).", answer: "Directions parallel and a point of one satisfies the other's equation.", concept: "Check both direction proportionality and a shared point." },

            // --- COORDINATE PLANES & AXES ---
            { id: 31, question: "Equations of coordinate planes.", answer: "xy-plane: z=0; yz-plane: x=0; zx-plane: y=0.", concept: "Normals k, i, j respectively." },
            { id: 32, question: "Distance of point to a coordinate plane.", answer: "To xy-plane: |z0|; to yz-plane: |x0|; to zx-plane: |y0|.", concept: "Perpendicular distances along normals." },

            // --- SPECIAL FORMS & CONVERSIONS ---
            { id: 33, question: "Normal form parameters of a plane.", answer: "r·n̂ = p where n̂ is unit normal and p is the perpendicular distance from origin.", concept: "From ax+by+cz+d=0 we get p = |d|/√(a^2+b^2+c^2) when plane is in intercept form; adjust sign by orientation." },
            { id: 34, question: "Convert from general to intercept form (when possible).", answer: "If d≠0 and plane not passing through origin: divide by −d to get x/(−d/a) + y/(−d/b) + z/(−d/c) = 1.", concept: "Intercepts are −d/a, −d/b, −d/c." },
            { id: 35, question: "Direction ratios of the normal to a plane ax+by+cz+d=0.", answer: "(a,b,c).", concept: "Normal vector components are coefficients of x,y,z." },
            { id: 36, question: "Foot of perpendicular from origin to plane ax+by+cz+d=0.", answer: "Point P = (−ad, −bd, −cd)/(a^2+b^2+c^2) when d chosen so plane passes accordingly; more robust formula uses projection method.", concept: "Use vector projection of OR onto normal." },

            // --- TWO-PLANES & LINE OF INTERSECTION ---
            { id: 37, question: "Line of intersection of planes Π1: n1·r = p1 and Π2: n2·r = p2 (concept).", answer: "Direction is n1×n2; take a particular solution r0 satisfying both, then r = r0 + t(n1×n2).", concept: "Solve 2 linear equations to find r0." },
            { id: 38, question: "Condition for two planes to be parallel/perpendicular.", answer: "Parallel: normals proportional; Perpendicular: n1·n2 = 0.", concept: "Use normals to compare." },
            { id: 39, question: "Distance between parallel planes ax+by+cz+d1=0 and ax+by+cz+d2=0.", answer: "|d2−d1|/√(a^2+b^2+c^2).", concept: "Perpendicular distance along normal." },

            // --- PRACTICAL EVALUATIONS ---
            { id: 40, question: "Compute angle between line and plane using vectors.", answer: "θ where sinθ = |d·n|/(|d||n|).", concept: "Use unit normal if preferred." },
            { id: 41, question: "Distance of a point from a line using components.", answer: "For line through A with direction d and point P: distance = |(AP×d)|/|d|.", concept: "Equivalent coordinate formula available via determinants." },
            { id: 42, question: "Symmetric to parametric conversion for lines.", answer: "Given (x−x1)/l = (y−y1)/m = (z−z1)/n, set x=x1+lt, y=y1+mt, z=z1+nt.", concept: "Parameter t traces the line." },
            { id: 43, question: "Parametric to symmetric conversion for lines.", answer: "Eliminate parameter t from x=x1+lt, y=y1+mt, z=z1+nt.", concept: "Assume l,m,n not all zero." },

            // --- THEORY CONSOLIDATION ---
            { id: 44, question: "Shortest distance zero criterion.", answer: "S.D. = 0 iff lines intersect or are coincident.", concept: "If directions are parallel and offset not perpendicular ⇒ S.D. is constant non-zero." },
            { id: 45, question: "Coplanar vs skew lines (definition).", answer: "Coplanar lines lie in a common plane; skew lines are non-parallel, non-intersecting lines in 3D.", concept: "Skew lines cannot be made to intersect by translation in 3D." },
            { id: 46, question: "Equation of xy-plane, yz-plane, zx-plane (recap).", answer: "z=0; x=0; y=0 respectively.", concept: "Useful for intercept and distance computations." },
            { id: 47, question: "Angle between two lines using their direction cosines directly.", answer: "cosθ = l1l2 + m1m2 + n1n2.", concept: "Only for unit direction vectors (d.c.s)." },
            { id: 48, question: "Direction ratios of line joining two points P1 and P2.", answer: "(x2−x1, y2−y1, z2−z1).", concept: "Use in symmetric form of the line equation." },
            { id: 49, question: "Condition for a point to lie on a given line (symmetric form).", answer: "Substitute coordinates and check equality of ratios with same parameter value.", concept: "Equivalently, check that vector from a fixed point on line is parallel to direction vector." },
            { id: 50, question: "Find plane through point P and perpendicular to given line direction d.", answer: "Use normal n = d; plane: n·(r−p) = 0.", concept: "Plane normal to line shares its direction ratios." },
            { id: 51, question: "Angle between two planes in terms of their normals.", answer: "cosθ = |n1·n2|/(|n1||n2|).", concept: "Repeat of plane-plane formula in vector notation." },
            { id: 52, question: "Distance between skew lines (determinantal form).", answer: "= |det[ (b−a), d1, d2 ]| / |d1×d2| where columns are vectors.", concept: "Equivalent to |( (b−a)·(d1×d2) )|/|d1×d2|." },
            { id: 53, question: "Equation of plane containing a given line and parallel to a vector v.", answer: "Two direction vectors of plane are line's direction d and v; plane passes through a point on the line: (r−a)·(d×v)=0.", concept: "Normal is d×v." },
            { id: 54, question: "Condition for three points to be non-collinear and define a plane.", answer: "Vectors AB and AC must be non-parallel (AB×AC ≠ 0).", concept: "Then plane: (r−a)·(AB×AC)=0." },
            { id: 55, question: "Distance from origin to plane ax+by+cz+d=0.", answer: "|d|/√(a^2+b^2+c^2).", concept: "Special case of point-plane distance with P at origin." },
            { id: 56, question: "When is a plane parallel to coordinate planes?", answer: "Parallel to xy-plane if c=0; to yz-plane if a=0; to zx-plane if b=0.", concept: "Normals align with respective axes." },
            { id: 57, question: "Equation of plane through intercepts (a,0,0), (0,b,0), (0,0,c).", answer: "x/a + y/b + z/c = 1.", concept: "Intercept form derived from three-point form." },
            { id: 58, question: "Equation of plane through point A and parallel to coordinate plane.", answer: "Through A(x1,y1,z1) parallel to xy-plane: z = z1; similarly for others.", concept: "Normals along axes." },
            { id: 59, question: "Angle between line and coordinate axes via direction cosines.", answer: "If line has d.c.s (l,m,n), angles with axes are α,β,γ so that cosα=l, cosβ=m, cosγ=n.", concept: "l^2+m^2+n^2=1." },
            { id: 60, question: "Check if a point lies on a plane ax+by+cz+d=0.", answer: "Substitute coordinates; if expression equals zero, point lies on plane.", concept: "Basic membership test." }
        ]
    }
};
