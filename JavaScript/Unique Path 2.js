/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    const m = obstacleGrid.length;
    const n = obstacleGrid[0].length;

    // If the starting or ending cell is blocked, no paths are possible
    if (obstacleGrid[0][0] === 1 || obstacleGrid[m - 1][n - 1] === 1) {
        return 0;
    }

    // Use a 1D array to store path counts for the current row
    let dp = new Array(n).fill(0);
    
    // Base case: starting point
    dp[0] = 1;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (obstacleGrid[i][j] === 1) {
                // If there's an obstacle, set paths to 0
                dp[j] = 0;
            } else if (j > 0) {
                // Number of paths = paths from top (already in dp[j]) 
                // + paths from left (dp[j-1])
                dp[j] += dp[j - 1];
            }
        }
    }

    return dp[n - 1];
};
