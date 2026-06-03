class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        strs.sort((a, b) => a.length - b.length);
        let res = strs[0];
        for (let s of strs.slice(1)) {
            while (!s.startsWith(res) && res.length) res = res.slice(0, -1);
        }
        return res;
    }
}
