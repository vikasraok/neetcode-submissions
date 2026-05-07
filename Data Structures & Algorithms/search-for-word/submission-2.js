class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        const m = board.length,
            n = board[0].length;
        const directions = [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1],
        ];
        const dfs = (len, i, j) => {
            const ch = board[i][j];
            if (ch !== word[len]) {
                return false;
            }
            if (len === word.length - 1) {
                return true;
            }
            board[i][j] = "@";
            for (let [dx, dy] of directions) {
                const nx = dx + i,
                    ny = dy + j;
                if (nx < 0 || ny < 0 || nx >= m || ny >= n) continue;
                if (dfs(len + 1, nx, ny)) return true;
            }
            board[i][j] = ch;
            return false;
        };
        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                if (board[i][j] === word[0]) {
                    if (dfs(0, i, j)) return true;
                }
            }
        }
        return false;
    }
}
