/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const result = [];

    const backtrack = (currentPath, used) => {
        // Base case: if the path length matches nums, we found a permutation
        if (currentPath.length === nums.length) {
            result.push([...currentPath]);
            return;
        }

        for (let i = 0; i < nums.length; i++) {
            // Skip if the number is already in the current path
            if (used[i]) continue;

            // Choose the number
            currentPath.push(nums[i]);
            used[i] = true;

            // Recurse to build the rest of the permutation
            backtrack(currentPath, used);

            // Undo the choice (backtrack)
            currentPath.pop();
            used[i] = false;
        }
    };

    backtrack([], new Array(nums.length).fill(false));
    return result;
};
