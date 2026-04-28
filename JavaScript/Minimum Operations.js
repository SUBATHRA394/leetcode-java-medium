/**
 * @param {number[][]} grid
 * @param {number} x
 * @return {number}
 */
var minOperations = function(grid, x) {
    const m = grid.length;
    const n = grid[0].length;
    const nums = [];

    // 1. Flatten the grid into a 1D array
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            nums.push(grid[i][j]);
        }
    }

    // 2. Check if all elements have the same remainder modulo x
    const remainder = nums[0] % x;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] % x !== remainder) {
            return -1;
        }
    }

    // 3. Sort to find the median
    nums.sort((a, b) => a - b);
    
    // In a sorted list, the median is at the middle index
    const median = nums[Math.floor(nums.length / 2)];
    let operations = 0;

    // 4. Calculate total operations to reach the median
    for (let num of nums) {
        operations += Math.abs(num - median) / x;
    }

    return operations;
};
