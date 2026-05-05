class PrefixTree {
    constructor() {
        this.root = {};
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        let root = this.root;
        for (let ch of word) {
            if (!root[ch]) {
                root[ch] = {};
            }
            root = root[ch];
        }
        root.isWord = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        let root = this.root;
        for (let ch of word) {
            if (!root[ch]) return false;
            root = root[ch];
        }
        return !!root.isWord;
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        let root = this.root;
        for (let ch of prefix) {
            if (!root[ch]) return false;
            root = root[ch];
        }
        return true;
    }
}
