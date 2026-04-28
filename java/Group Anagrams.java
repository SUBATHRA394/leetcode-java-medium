import java.util.*;

class Solution {
    public List<List<String>> groupAnagrams(String[] strs) {
        if (strs == null || strs.length == 0) {
            return new ArrayList<>();
        }

        // Map to store: Sorted String -> List of Anagrams
        Map<String, List<String>> map = new HashMap<>();

        for (String s : strs) {
            // Convert string to char array to sort it
            char[] chars = s.toCharArray();
            Arrays.sort(chars);
            
            // Create the key from the sorted characters
            String key = String.valueOf(chars);

            // If the key doesn't exist, create a new list
            if (!map.containsKey(key)) {
                map.put(key, new ArrayList<>());
            }
            
            // Add the original string to the list
            map.get(key).add(s);
        }

        // Return all grouped lists as a List of Lists
        return new ArrayList<>(map.values());
    }
}
