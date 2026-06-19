class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const rowSet = Array(board.length)
            .fill(undefined)
            .map((_) => new Set());
        const colSet = Array(board.length)
            .fill(undefined)
            .map((_) => new Set());
        const boxSet = Array(board.length)
            .fill(undefined)
            .map((_) => new Set());
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[0].length; j++) {
                const val = board[i][j];
                if (val === '.') continue;
                const row = rowSet[i];
                const col = colSet[j];
                const box = boxSet[Math.floor(i / 3) * 3 + Math.floor(j / 3)];
                
                if (row.has(val)) return false;
                if (col.has(val)) return false;
                if (box.has(val)) return false;
                row.add(val);
                col.add(val);
                box.add(val);
            }
        }
        return true
    }
}
