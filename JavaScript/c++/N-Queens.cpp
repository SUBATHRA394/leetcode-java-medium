#include <vector>

class Solution {
public:
    int count = 0;

    int totalNQueens(int n) {
        // Track occupied columns and diagonals
        std::vector<bool> cols(n, false);
        std::vector<bool> diag1(2 * n, false); // sum: row + col
        std::vector<bool> diag2(2 * n, false); // diff: row - col + n (to avoid negatives)
        
        backtrack(0, n, cols, diag1, diag2);
        return count;
    }

private:
    void backtrack(int row, int n, std::vector<bool>& cols, 
                   std::vector<bool>& diag1, std::vector<bool>& diag2) {
        // Base case: All queens placed
        if (row == n) {
            count++;
            return;
        }

        for (int col = 0; col < n; col++) {
            int d1 = row + col;
            int d2 = row - col + n;

            // If any path is under attack, skip this column
            if (cols[col] || diag1[d1] || diag2[d2]) {
                continue;
            }

            // Place queen (mark as used)
            cols[col] = diag1[d1] = diag2[d2] = true;

            // Move to the next row
            backtrack(row + 1, n, cols, diag1, diag2);

            // Backtrack (unmark)
            cols[col] = diag1[d1] = diag2[d2] = false;
        }
    }
};
