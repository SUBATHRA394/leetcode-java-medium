/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let currentSum = nums[0];
    let maxSum = nums[0];
    
    for (let i = 1; i < nums.length; i++) {
        // If currentSum is negative, it's better to start over from nums[i]
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        
        // Keep track of the best sum we've seen so far
        maxSum = Math.max(maxSum, currentSum);
    }
    
    return maxSum;
};
