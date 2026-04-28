class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const rows = Array(9).fill(0)
        const cols = Array(9).fill(0)
        const squares = Array(9).fill(0)
        for(let i=0; i< 9; i++){
            for(let j=0;j<9;j++){
                if(board[i][j] === '.') continue
                const digit =  parseInt(board[i][j])-1;
                const mask =  1 << digit;
                const squareIndex = Math.floor(i/3)*3+Math.floor(j/3);
                if(rows[i] & mask || cols[j] & mask || squares[squareIndex] & mask) return false;
                rows[i] = rows[i] | mask
                cols[j] = cols[j] | mask
                squares[squareIndex] = squares[squareIndex] | mask
            }
        }
        return true;
    }
}
