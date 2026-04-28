class Node {
    constructor(){
        this.children = new Map();
        this.ends =false;
    }
}
class PrefixTree {
    constructor() {
        this.root = new Node();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        let node = this.root;
        for(let char of word){
            if(!node.children[char]){
                node.children[char] = new Node();
            }
            node = node.children[char];
        }
        node.ends = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        let node = this.root;
        for(let char of word){
            if(!node.children[char]) return false;
            node= node.children[char];
        }
        return node.ends;
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        let node = this.root;
        for (let char of prefix) {
            if (!node.children[char]) {
                return false;
            }
            node = node.children[char];
        }
        return true;
    }
}
