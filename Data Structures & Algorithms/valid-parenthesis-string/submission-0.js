class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    checkValidString(s) {
        let lo = 0,
            hi = 0;
        for (let ch of s) {
            if (ch === ")") {
                lo--;
                hi--;
            } else if (ch === "(") {
                lo++;
                hi++;
            } else if (ch === "*") {
                lo--;
                hi++;
            }
            if (hi < 0) return false;
            lo = Math.max(lo, 0)
        }
        return lo === 0;
    }
}
