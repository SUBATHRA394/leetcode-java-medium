#include <vector>
#include <string>
#include <numeric>

class Solution {
public:
    std::string getPermutation(int n, int k) {
        std::vector<int> numbers;
        std::vector<int> factorial(n, 1);
        
        // 1. Precompute factorials and prepare list of numbers
        // factorial[i] will store i!
        for (int i = 1; i < n; i++) {
            factorial[i] = factorial[i - 1] * i;
            numbers.push_back(i);
        }
        numbers.push_back(n);

        // 2. Adjust k to be 0-indexed for easier calculation
        k--;

        std::string result = "";
        
        // 3. Determine each digit one by one
        for (int i = n - 1; i >= 0; i--) {
            // Index of the current number to pick
            int index = k / factorial[i];
            
            result += std::to_string(numbers[index]);
            
            // Remove the used number from the list
            numbers.erase(numbers.begin() + index);
            
            // Update k for the next iteration
            k %= factorial[i];
        }
        
        return result;
    }
};
