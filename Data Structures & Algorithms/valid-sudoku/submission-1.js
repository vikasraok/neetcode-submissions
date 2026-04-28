class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const rows = new Map()
        const cols = new Map()
        const squares = new Map()
        for(let i=0; i< 9; i++){
            for(let j=0;j<9;j++){
                if(board[i][j] === '.') continue
                const rowIndex = Math.floor(i/3)*3
                const colIndex = Math.floor(j/3)*3
                const squareKey = `${rowIndex},${colIndex}`
                if(rows.has(i) && rows.get(i).has(board[i][j])) return false;
                if(cols.has(j) && cols.get(j).has(board[i][j])) return false;
                if(squares.has(squareKey) && squares.get(squareKey).has(board[i][j])) return false;
                if(!rows.has(i)) rows.set(i, new Set())
                if(!cols.has(j)) cols.set(j,new Set())
                if(!squares.has(squareKey)) squares.set(squareKey, new Set())
                rows.get(i).add(board[i][j]);
                cols.get(j).add(board[i][j])
                squares.get(squareKey).add(board[i][j])
            }
        }
        return true;
    }
}
