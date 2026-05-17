class Solution {
    /**
     * @param {string} S
     * @return {number[]}
     */
    partitionLabels(S) {
        const res = [];
        const map = new Map();
        let start = 0,
            end = 0;
        for (let i = 0; i < S.length; i++) {
            map.set(S[i], i);
        }
        for (let i = 0; i < S.length; i++) {
            end = Math.max(map.get(S[i]), end);
            if (i === end) {
                res.push(i - start + 1);
                start = i + 1;
                end = start;
            }
        }
        return res
    }
}
