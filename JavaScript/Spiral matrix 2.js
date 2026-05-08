/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    // Initialize an n x n matrix with zeros
    const matrix = Array.from({ length: n }, () => new Array(n).fill(0));
    
    let top = 0, bottom = n - 1;
    let left = 0, right = n - 1;
    let num = 1;

    while (top <= bottom && left <= right) {
        // 1. Fill top row (left to right)
        for (let i = left; i <= right; i++) {
            matrix[top][i] = num++;
        }
        top++;

        // 2. Fill right column (top to bottom)
        for (let i = top; i <= bottom; i++) {
            matrix[i][right] = num++;
        }
        right--;

        // 3. Fill bottom row (right to left)
        for (let i = right; i >= left; i--) {
            matrix[bottom][i] = num++;
        }
        bottom--;

        // 4. Fill left column (bottom to top)
        for (let i = bottom; i >= top; i--) {
            matrix[i][left] = num++;
        }
        left++;
    }

    return matrix;
};
