import java.util.*;

class Solution {
    private List<List<String>> result = new ArrayList<>();
    private boolean[] cols;
    private boolean[] diag1; // row + col
    private boolean[] diag2; // row - col

    public List<List<String>> solveNQueens(int n) {
        cols = new boolean[n];
        diag1 = new boolean[2 * n];
        diag2 = new boolean[2 * n];
        
        char[][] board = new char[n][n];
        for (int i = 0; i < n; i++) Arrays.fill(board[i], '.');
        
        backtrack(0, n, board);
        return result;
    }

    private void backtrack(int row, int n, char[][] board) {
        if (row == n) {
            result.add(construct(board));
            return;
        }

        for (int col = 0; col < n; col++) {
            // Calculate diagonal indices
            // We add (n - 1) to diag2 to keep the index positive
            int d1 = row + col;
            int d2 = row - col + n;

            if (cols[col] || diag1[d1] || diag2[d2]) continue;

            // Place queen
            board[row][col] = 'Q';
            cols[col] = diag1[d1] = diag2[d2] = true;

            // Move to next row
            backtrack(row + 1, n, board);

            // Backtrack: remove queen
            board[row][col] = '.';
            cols[col] = diag1[d1] = diag2[d2] = false;
        }
    }

    private List<String> construct(char[][] board) {
        List<String> path = new ArrayList<>();
        for (int i = 0; i < board.length; i++) {
            path.add(new String(board[i]));
        }
        return path;
    }
}
