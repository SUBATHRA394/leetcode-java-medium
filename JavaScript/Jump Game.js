/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let maxReachable = 0;
    
    for (let i = 0; i < nums.length; i++) {
        // If the current index is beyond the furthest we can reach, we're stuck
        if (i > maxReachable) return false;
        
        // Update the furthest index we can reach from here
        maxReachable = Math.max(maxReachable, i + nums[i]);
        
        // Optimization: if we can already reach the end, stop early
        if (maxReachable >= nums.length - 1) return true;
    }
    
    return true;
};
