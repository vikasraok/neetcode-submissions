class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let l = 0,
            n = s.length;
        const freq = new Map();
        let maxCount = 0,
            res = 0;
        for (let r = 0; r < n; r++) {
            const ch = s[r];
            freq.set(ch, (freq.get(ch) ?? 0) + 1);
            maxCount = Math.max(maxCount, freq.get(ch));
            while (r - l + 1 - maxCount > k) {
                freq.set(s[l], freq.get(s[l]) - 1);
                l++;
            }
            res = Math.max(res, r - l + 1);
        }
        return res;
    }
}
