class Solution {
    /**
     * @param {character[][]} board
     * @param {string[]} words
     * @return {string[]}
     */
    Trie = () => {
        const root = {};
        const insert = (word) => {
            let curr = root;
            for (let ch of word) {
                if (!curr[ch]) curr[ch] = {};
                curr = curr[ch];
            }
            curr.word = word;
        };

        return { root, insert };
    };
    findWords(board, words) {
        const trie = this.Trie();
        for (let word of words) {
            trie.insert(word);
        }
        const m = board.length,
            n = board[0]?.length;
        const directions = [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1],
        ];
        const res = [];
        const dfs = (i, j, pref) => {
            const ch = board[i][j];
            if (!pref[ch]) return;
            if (pref[ch].word) {
                res.push(pref[ch].word);
                pref[ch].word = null;
            }
            board[i][j] = "#";
            if (pref[ch]) {
                for (let [dx, dy] of directions) {
                    const nx = i + dx,
                        ny = j + dy;
                    if (nx < 0 || ny < 0 || nx >= m || ny >= n) continue;
                    dfs(nx, ny, pref[ch]);
                }
            }
            board[i][j] = ch;
        };
        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                dfs(i, j, trie.root);
            }
        }
        return res;
    }
}
