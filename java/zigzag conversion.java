import java.util.ArrayList;
import java.util.List;

class Solution {
    public String convert(String s, int numRows) {
        // Edge case: If only one row, the pattern doesn't change
        if (numRows == 1 || s.length() <= numRows) {
            return s;
        }

        // Initialize a list of StringBuilders for each row
        List<StringBuilder> rows = new ArrayList<>();
        for (int i = 0; i < Math.min(numRows, s.length()); i++) {
            rows.add(new StringBuilder());
        }

        int curRow = 0;
        boolean goingDown = false;

        // Iterate through each character in the string
        for (char c : s.toCharArray()) {
            rows.get(curRow).append(c);
            
            // If we are at the top or bottom row, flip the direction
            if (curRow == 0 || curRow == numRows - 1) {
                goingDown = !goingDown;
            }
            
            // Move up or down based on the current direction
            curRow += goingDown ? 1 : -1;
        }

        // Combine all rows into a single StringBuilder
        StringBuilder result = new StringBuilder();
        for (StringBuilder row : rows) {
            result.append(row);
        }

        return result.toString();
    }
}
