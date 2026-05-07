class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        const res = [];
        const dfs = (current, open, close) => {
            if (current.length === 2 * n) {
                res.push(current.join(""));
                return;
            }
            if (open > 0) {
                current.push("(");
                dfs(current, open - 1, close);
                current.pop();
            }
            if (close > open) {
                current.push(")");
                dfs(current, open, close - 1);
                current.pop();
            }
        };
        dfs([], n, n);
        return res;
    }
}
