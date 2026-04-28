class Solution {
public:
    void setZeroes(vector<vector<int>>& matrix) {
        int m = matrix.size();
        int n = matrix[0].size();
        bool firstRowZero = false;
        bool firstColZero = false;

        // 1. Check if first row needs to be zero
        for (int j = 0; j < n; j++) {
            if (matrix[0][j] == 0) firstRowZero = true;
        }

        // 2. Check if first column needs to be zero
        for (int i = 0; i < m; i++) {
            if (matrix[i][0] == 0) firstColZero = true;
        }

        // 3. Use first row and column as markers for the rest of the matrix
        for (int i = 1; i < m; i++) {
            for (int j = 1; j < n; j++) {
                if (matrix[i][j] == 0) {
                    matrix[i][0] = 0;
                    matrix[0][j] = 0;
                }
            }
        }

        // 4. Set matrix cells to zero based on markers
        for (int i = 1; i < m; i++) {
            for (int j = 1; j < n; j++) {
                if (matrix[i][0] == 0 || matrix[0][j] == 0) {
                    matrix[i][j] = 0;
                }
            }
        }

        // 5. Zero out the first row if needed
        if (firstRowZero) {
            for (int j = 0; j < n; j++) matrix[0][j] = 0;
        }

        // 6. Zero out the first column if needed
        if (firstColZero) {
            for (int i = 0; i < m; i++) matrix[i][0] = 0;
        }
    }
};
