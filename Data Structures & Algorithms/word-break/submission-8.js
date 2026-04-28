class Node {
    constructor(){
        this.children={};
        this.isWord=false;
    }
}

class Trie{
    constructor(){
        this.root = new Node();
    }
    insert(word){
        let node = this.root;
        for(let char of word){
            if(!node.children[char]){
                node.children[char] = new Node();
            }
            node = node.children[char]
        }
        node.isWord =true;
    }
    search(word){
        let node = this.root
        for(let char of word){
            if(!node.children[char]) return false;
            node = node.children[char]
        }
        return node.isWord;
    }
}


class Solution {
    wordBreak(s, wordDict) {
        const trie = new Trie();
        for(let word of wordDict) trie.insert(word);
        const memo = new Map();

        const dfs= (i)=>{
            if(s.length === i) return true;
            if(memo.has(i)) return memo.get(i)

            let node = trie.root;
            for(let j=i; j<s.length;j++){
                const sub = s.substring(i, j + 1); 
                if (trie.search(sub) && dfs(j + 1)) { 
                    memo.set(i, true); 
                    return true; 
                }
            }
            memo.set(i,false)
            return false
        }
        return dfs(0)
    }
}
