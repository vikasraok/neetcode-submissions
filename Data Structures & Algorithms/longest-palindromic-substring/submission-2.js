class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {
        let max = "";
        function expand(s, l, r) {
            while (l >= 0 && r < s.length && s[l] === s[r]) {
                l--;
                r++;
            }
            return s.slice(l + 1, r);
        }
        for (let i = 0; i < s.length; i++) {
            const l = i,
                r = i;
            const maxEven = expand(s, l, r);
            const maxOdd = expand(s, l, r + 1);
            if (maxEven.length > max.length) max = maxEven;
            if (maxOdd.length > max.length) max = maxOdd;
        }
        return max;
    }
}
