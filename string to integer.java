class Solution {
    public int myAtoi(String s) {
        int i = 0, n = s.length();
        int sign = 1;
        int result = 0;

        // Step 1: Skip leading whitespace
        while (i < n && s.charAt(i) == ' ') {
            i++;
        }

        // Step 2: Handle optional sign
        if (i < n) {
            if (s.charAt(i) == '+') {
                sign = 1;
                i++;
            } else if (s.charAt(i) == '-') {
                sign = -1;
                i++;
            }
        }

        // Step 3: Convert digits
        while (i < n) {
            char c = s.charAt(i);
            if (c < '0' || c > '9') {
                break; // stop at first non-digit
            }
            int digit = c - '0';

            // Step 4: Check for overflow before adding the digit
            if (result > (Integer.MAX_VALUE - digit) / 10) {
                return sign == 1 ? Integer.MAX_VALUE : Integer.MIN_VALUE;
            }

            result = result * 10 + digit;
            i++;
        }

        return result * sign;
    }
}
