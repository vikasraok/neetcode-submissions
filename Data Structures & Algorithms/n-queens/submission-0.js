class Solution {
    /**
     * @param {number} n
     * @return {string[][]}
     */
    solveNQueens(n) {
        const cols = new Set(),
            diag = new Set(),
            antiDia = new Set();
        const canPlace = (r, c) => {
            return !cols.has(c) && !diag.has(r - c) && !antiDia.has(r + c);
        };
        const res = [];
        const dfs = (row, board) => {
            if (row === n) {
                res.push(board.map((row) => row.join("")));
                return;
            }
            for (let col = 0; col < n; col++) {
                if (canPlace(row, col)) {
                    board[row][col] = "Q";
                    cols.add(col);
                    diag.add(row - col);
                    antiDia.add(row + col);
                    dfs(row + 1, board);
                    cols.delete(col);
                    diag.delete(row - col);
                    antiDia.delete(row + col);
                    board[row][col] = ".";
                }
            }
        };
        const board = Array.from({ length: n }, () => Array(n).fill("."));
        dfs(0, board);
        return res;
    }
}
