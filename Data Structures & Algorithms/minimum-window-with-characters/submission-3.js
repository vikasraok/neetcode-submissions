class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if (t.length === 0 || t.length > s.length) return "";
        const need = new Map();
        for (const ch of t) {
            need.set(ch, (need.get(ch) || 0) + 1);
        }
        const required = need.size;
        const window = new Map();
        let formed = 0;
        let l = 0;
        let minLen = Infinity;
        let minLeft = 0;

        for (let r = 0; r < s.length; r++) {
            const c = s[r];
            window.set(c, (window.get(c) || 0) + 1);
            // check if window valid
            if (need.has(c) && window.get(c) === need.get(c)) {
                formed++;
            }
            while (l <= r && formed === required) {
                if (r - l + 1 < minLen) {
                    minLen = r - l + 1;
                    minLeft = l;
                }
                const leftChar = s[l];
                window.set(leftChar, window.get(leftChar) - 1);
                if (need.has(leftChar) && window.get(leftChar) < need.get(leftChar)) {
                    formed--;
                }
                l++;
            }
        }
        return minLen === Infinity ? "" : s.substring(minLeft, minLeft + minLen);
    }
};
