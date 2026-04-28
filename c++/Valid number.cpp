#include <string>
#include <cctype>

class Solution {
public:
    bool isNumber(std::string s) {
        bool seenDigit = false;
        bool seenDot = false;
        bool seenE = false;

        for (int i = 0; i < s.length(); i++) {
            char c = s[i];

            if (isdigit(c)) {
                seenDigit = true;
            } 
            else if (c == '+' || c == '-') {
                // Signs only at the start or after an exponent
                if (i > 0 && s[i - 1] != 'e' && s[i - 1] != 'E') {
                    return false;
                }
            } 
            else if (c == 'e' || c == 'E') {
                // Must have a digit before 'e' and only one 'e' allowed
                if (seenE || !seenDigit) {
                    return false;
                }
                seenE = true;
                seenDigit = false; // Must follow 'e' with a digit
            } 
            else if (c == '.') {
                // Only one dot allowed and never after 'e'
                if (seenDot || seenE) {
                    return false;
                }
                seenDot = true;
            } 
            else {
                return false;
            }
        }

        return seenDigit;
    }
};
