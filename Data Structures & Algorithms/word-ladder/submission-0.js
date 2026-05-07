class Solution {
    /**
     * @param {string} beginWord
     * @param {string} endWord
     * @param {string[]} wordList
     * @return {number}
     */
    ladderLength(beginWord, endWord, wordList) {
        const map = {};
        for (let word of wordList) {
            for (let i of word.split("").keys()) {
                const pattern = word.slice(0, i) + "*" + word.slice(i + 1);
                if (!map[pattern]) map[pattern] = [];
                map[pattern].push(word);
            }
        }
        let queue = [beginWord];
        let trans = 1;
        const visited = new Set([beginWord]);
        while (queue.length) {
            const size = queue.length;
            const next = [];
            for (let i = 0; i < size; i++) {
                const word = queue[i];
                for (let i of word.split("").keys()) {
                    const pattern = word.slice(0, i) + "*" + word.slice(i + 1);
                    if (map[pattern]) {
                        for (let n of map[pattern]) {
                            if (n === endWord) return trans + 1;
                            if (!visited.has(n)) {
                                visited.add(n);
                                next.push(n);
                            }
                        }
                    }
                }
            }
            queue = next;
            trans++;
        }
        return 0;
    }
}
