class TrieNode{
    constructor(){
        this.children = new Map();
        this.word = null;
    }
    addWord(word){
        let node = this;
        for(let char of word){
            if(!node.children[char]){
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }
        node.word = word;
    }
}
class Solution {
    /**
     * @param {character[][]} board
     * @param {string[]} words
     * @return {string[]}
     */
    findWords(board, words) {
        const root = new TrieNode();
        for(let word of words){
            root.addWord(word);
        }
        const rows = board.length,
        cols= board[0].length;
        const res = [];

        const dfs = (r,c,node)=>{
            if(r<0||c<0 || r>= rows|| c>=cols|| board[r][c] === '#') return;
            let tmp = board[r][c];
            if(!node.children[tmp]) return;

            node = node.children[tmp]
            if(node.word){
                res.push(node.word);
                node.word = null;
            }    
            board[r][c] = "#";
            
            dfs(r+1,c,node);
            dfs(r-1,c,node);
            dfs(r,c+1,node);
            dfs(r,c-1,node);

            board[r][c] = tmp;
        }

        for(let r=0; r< rows; r++){
            for(let c=0;c<cols; c++){
                dfs(r,c, root);
            }
        }
        return res
    }
}
