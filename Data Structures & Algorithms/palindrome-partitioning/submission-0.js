class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    partition(s) {
        const isPalin = (l, r) => {
            while (l < r) {
                if (s[l++] !== s[r--]) return false;
            }
            return true;
        };
        const res = [];
        const dfs = (ix, current) => {
            if (ix === s.length) {
                res.push([...current]);
                return;
            }
            for (let i = ix; i < s.length; i++) {
                if (isPalin(ix, i)) {
                    current.push(s.slice(ix, i + 1));
                    dfs(i + 1, current);
                    current.pop();
                }
            }
        };
        dfs(0, []);
        return res;
    }
}
