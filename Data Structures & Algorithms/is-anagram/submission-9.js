class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const freq = new Map();
        if (s.length !== t.length) return false;
        for (let ch of s) {
            freq.set(ch, (freq.get(ch) ?? 0) + 1);
        }
        for (let ch of t) {
            if (!freq.has(ch)) return false;
            freq.set(ch, freq.get(ch) - 1);
        }
        return freq.values().every((num) => num === 0);
    }
}
