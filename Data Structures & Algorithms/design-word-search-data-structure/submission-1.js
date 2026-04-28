class Node{
    constructor(){
        this.children = new Map();
        this.ends = false;
    }
}
class WordDictionary {
    constructor() {
        this.root = new Node();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word) {
        let node = this.root
        for(let char of word){
            if(!node.children[char]){
                node.children[char] = new Node();
            }
            node = node.children[char]
        }
        node.ends = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        const dfs = (index,node)=>{
            if(index === word.length) return node.ends;
            const char = word[index];
            if(char === '.'){
                for(let child of Object.values(node.children)){
                    if(dfs(index+1, child)) return true;
                }
                return false;
            }else {
                if(!node.children[char]) return false;
                return dfs(index+1, node.children[char]);
            }
        }

        return dfs(0,this.root)
    }
}
