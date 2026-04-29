class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let l = 0;
        const set = new Set();
        let res = 0;
        for (let r = 0; r < s.length; r++) {
            while (set.has(s[r])) {
                set.delete(s[l++]);
            }
            set.add(s[r]);
            res = Math.max(res, r - l + 1);
        }
        return res;
    }
}
