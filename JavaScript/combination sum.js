/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const result = [];

    const backtrack = (remaining, start, currentPath) => {
        // Base Case: Target reached
        if (remaining === 0) {
            result.push([...currentPath]);
            return;
        }

        // Base Case: Exceeded target
        if (remaining < 0) {
            return;
        }

        for (let i = start; i < candidates.length; i++) {
            // 1. Choose the number
            currentPath.push(candidates[i]);

            // 2. Explore: Note we pass 'i' as the start index again 
            // because we can reuse the same element.
            backtrack(remaining - candidates[i], i, currentPath);

            // 3. Un-choose (Backtrack)
            currentPath.pop();
        }
    };

    backtrack(target, 0, []);
    return result;
};

// --- Test Cases ---
console.log(combinationSum([2,3,6,7], 7)); // [[2,2,3],[7]]
console.log(combinationSum([2,3,5], 8));   // [[2,2,2,2],[2,3,3],[3,5]]
