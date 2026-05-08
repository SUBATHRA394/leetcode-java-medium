/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    const m = grid.length;
    const n = grid[0].length;
    
    // Create a DP array representing one row
    const dp = new Array(n).fill(Infinity);
    
    // Starting point
    dp[0] = 0;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (j === 0) {
                // If it's the first column, we can only come from above
                dp[j] = dp[j] + grid[i][j];
            } else {
                // Otherwise, take the min of (from top, from left) + current cell value
                dp[j] = Math.min(dp[j], dp[j - 1]) + grid[i][j];
            }
        }
    }

    return dp[n - 1];
};
