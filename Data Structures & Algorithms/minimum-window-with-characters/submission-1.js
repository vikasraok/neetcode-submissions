class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if (!s || !t || s.length < t.length) return "";
        const required = new Map();
        for (const char of t) {
            required.set(char, (required.get(char) || 0) + 1);
        }
        let minLen = Infinity;
        let result = "";

        for (let i = 0; i <= s.length - t.length; i++) {
            const count = new Map();
            let  matched =0;
            for (let j = i; j < s.length; j++) {
                const char = s[j];
                count.set(char, (count.get(char) || 0) + 1);

                if (required.has(char) && count.get(char) === required.get(char)) {
                    matched++;
                }
                if (matched === required.size) {
                    const windowLen = j - i + 1;
                    if (windowLen < minLen) {
                    minLen = windowLen;
                    result = s.slice(i, j + 1);
                    }
                    break; // no need to expand further
                }
            }
        }

        return result;
    }
}
