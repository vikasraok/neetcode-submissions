class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const rowHash = new Set();
        const colHash = new Set();
        const gridHash = new Set();
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board.length; j++) {
                const cell = board[i][j];
                const rowKey = i + "@" + cell;
                const colKey = j + "@" + cell;
                const gridKey = Math.floor(i / 3) * 3 + Math.floor(j / 3) + "@" + cell;
                if (cell >= "1" && cell <= "9") {
                    if (!rowHash.has(rowKey)) rowHash.add(rowKey);
                    else return false;
                    if (!colHash.has(colKey)) colHash.add(colKey);
                    else return false;
                    if (!gridHash.has(gridKey)) gridHash.add(gridKey);
                    else return false;
                }
            }
        }
        return true;
    }
}
