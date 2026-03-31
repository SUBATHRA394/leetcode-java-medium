/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    // Initialize 9 sets for each category: rows, columns, and 3x3 boxes
    const rows = Array.from({ length: 9 }, () => new Set());
    const cols = Array.from({ length: 9 }, () => new Set());
    const boxes = Array.from({ length: 9 }, () => new Set());

    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            const val = board[r][c];

            // Only validate filled cells
            if (val === '.') continue;

            // Calculate sub-box index (0-8) using row and column
            const boxIdx = Math.floor(r / 3) * 3 + Math.floor(c / 3);

            // If value is already in any corresponding set, the board is invalid
            if (rows[r].has(val) || cols[c].has(val) || boxes[boxIdx].has(val)) {
                return false;
            }

            // Record the value in each relevant set
            rows[r].add(val);
            cols[c].add(val);
            boxes[boxIdx].add(val);
        }
    }

    return true;
};
