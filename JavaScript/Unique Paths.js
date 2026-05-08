/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    // Create a 1D array to save space (current row)
    // We only need the previous row's values and the current row's left value
    let row = new Array(n).fill(1);

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            // ways to reach cell = ways from top (row[j]) + ways from left (row[j-1])
            row[j] = row[j] + row[j - 1];
        }
    }

    return row[n - 1];
};
