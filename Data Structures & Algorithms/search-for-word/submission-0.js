class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        // DFS with backtracking
        // Move in 4 directions
        // track row/col and current index
        // return when index === word length
        const rows = board.length,
            cols = board[0].length;

            function dfs(r,c,i){
                if(i=== word.length) return true;
                if(r <0 || c<0 || r>= rows || c>= cols) return false;
                if(board[r][c] !== word[i]) return false;

                const temp = board[r][c];
                board[r][c] = '#'

                const found = dfs(r+1,c,i+1) || dfs(r-1,c,i+1)|| dfs(r, c+1, i+1) || dfs(r,c-1,i+1);
                board [r][c] = temp;
                return found;
            }
            for(let r=0; r< rows;r++){
                for(let c=0;c<cols;c++){
                    if(dfs(r,c,0)) return true;
                }
            }
        return false;
    }
}
