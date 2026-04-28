import java.util.*;

class Solution {
    public List<List<Integer>> permuteUnique(int[] nums) {
        List<List<Integer>> results = new ArrayList<>();
        // 1. Sort to handle duplicates
        Arrays.sort(nums);
        backtrack(results, new ArrayList<>(), nums, new boolean[nums.length]);
        return results;
    }

    private void backtrack(List<List<Integer>> results, List<Integer> current, int[] nums, boolean[] used) {
        // Base case: current permutation is complete
        if (current.size() == nums.length) {
            results.add(new ArrayList<>(current));
            return;
        }

        for (int i = 0; i < nums.length; i++) {
            // Skip if element is already used in the current path
            if (used[i]) continue;

            // 2. Skip duplicates: 
            // If the current number is the same as the previous one,
            // and the previous one was NOT used, it means we already 
            // processed all permutations starting with this value.
            if (i > 0 && nums[i] == nums[i - 1] && !used[i - 1]) {
                continue;
            }

            used[i] = true;
            current.add(nums[i]);
            
            backtrack(results, current, nums, used);
            
            // Backtrack: undo the choice
            used[i] = false;
            current.remove(current.size() - 1);
        }
    }
}
