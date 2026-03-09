class Solution {
    public String longestPalindrome(String s) {
        if (s == null || s.length() < 1) return "";
        
        int start = 0, end = 0;
        
        for (int i = 0; i < s.length(); i++) {
            // Case 1: Odd length (center is the character itself)
            int len1 = expandAroundCenter(s, i, i);
            // Case 2: Even length (center is between i and i+1)
            int len2 = expandAroundCenter(s, i, i + 1);
            
            // Get the maximum length found at this center
            int len = Math.max(len1, len2);
            
            // If we found a longer palindrome, update the start and end pointers
            if (len > end - start) {
                start = i - (len - 1) / 2;
                end = i + len / 2;
            }
        }
        
        // Extract the substring using the final pointers
        return s.substring(start, end + 1);
    }

    private int expandAroundCenter(String s, int left, int right) {
        // Expand as long as pointers are in bounds and characters match
        while (left >= 0 && right < s.length() && s.charAt(left) == s.charAt(right)) {
            left--;
            right++;
        }
        // Return length: (right - 1) - (left + 1) + 1 = right - left - 1
        return right - left - 1;
    }
}
