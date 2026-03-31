/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    const findBound = (isFirst) => {
        let left = 0;
        let right = nums.length - 1;
        let bound = -1;

        while (left <= right) {
            let mid = Math.floor((left + right) / 2);

            if (nums[mid] === target) {
                bound = mid;
                if (isFirst) {
                    // To find the first position, keep looking left
                    right = mid - 1;
                } else {
                    // To find the last position, keep looking right
                    left = mid + 1;
                }
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return bound;
    };

    return [findBound(true), findBound(false)];
};

// --- Test Cases ---
console.log(searchRange([5,7,7,8,8,10], 8)); // [3, 4]
console.log(searchRange([5,7,7,8,8,10], 6)); // [-1, -1]
console.log(searchRange([], 0));             // [-1, -1]
