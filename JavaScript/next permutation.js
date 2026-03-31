/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    let i = nums.length - 2;

    // 1. Find the first decreasing element from the right
    while (i >= 0 && nums[i] >= nums[i + 1]) {
        i--;
    }

    if (i >= 0) {
        let j = nums.length - 1;
        // 2. Find the element just larger than nums[i] to swap with
        while (nums[j] <= nums[i]) {
            j--;
        }
        swap(nums, i, j);
    }

    // 3. Reverse the elements to the right of i to get the smallest possible order
    reverse(nums, i + 1);
};

function swap(nums, i, j) {
    [nums[i], nums[j]] = [nums[j], nums[i]];
}

function reverse(nums, start) {
    let end = nums.length - 1;
    while (start < end) {
        swap(nums, start, end);
        start++;
        end--;
    }
}
