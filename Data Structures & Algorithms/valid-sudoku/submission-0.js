class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        for(let i=0; i<9; i++){
            let seen = new Set();
            for(let j=0; j<9; j++){
                if(board[i][j] === '.') continue
                else if (!seen.has(board[i][j])) seen.add(board[i][j])
                else return false;
            }
        }
        for(let i=0; i<9; i++){
            let seen = new Set();
            for(let j=0; j<9; j++){
                if(board[j][i] === '.') continue
                else if (!seen.has(board[j][i])) seen.add(board[j][i])
                else return false;
            }
        }
        for (let square=0; square< 9; square++){
            let seen = new Set();
            for(let i=0; i< 3; i++){
                for(let j=0; j<3; j++){
                    let row = Math.floor(square / 3) * 3 + i;
                    let col = (square % 3) * 3 + j;
                    if (board[row][col] === '.') continue;
                    if (seen.has(board[row][col])) return false;
                    seen.add(board[row][col]);
                }
            }
        }
        return true
    }
}
