/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let jumps = 0;
    let currentEnd = 0;
    let farthest = 0;

    // We don't need to jump if we are already at the last element
    for (let i = 0; i < nums.length - 1; i++) {
        // Update the farthest point we can reach from the current index
        farthest = Math.max(farthest, i + nums[i]);

        // If we've reached the end of the range of our current jump
        if (i === currentEnd) {
            jumps++;
            currentEnd = farthest;

            // Optimization: If we can already reach the end, break early
            if (currentEnd >= nums.length - 1) break;
        }
    }

    return jumps;
};

// --- Test Cases ---
console.log(jump([2, 3, 1, 1, 4])); // Output: 2
console.log(jump([2, 3, 0, 1, 4])); // Output: 2
