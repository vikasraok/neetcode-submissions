class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        const res = [];
        const n = candidates.length;
        candidates.sort((a, b) => a - b);
        const dfs = (ix, sum, current) => {
            if (sum < 0) return;
            else if (sum === 0) {
                res.push([...current]);
                return;
            } else {
                for (let i = ix; i < n; i++) {
                    while (i > ix && candidates[i] === candidates[i - 1]) {
                        i++;
                    }
                    current.push(candidates[i]);
                    dfs(i + 1, sum - candidates[i], current);
                    current.pop();
                }
            }
        };
        dfs(0, target, []);
        return res;
    }
}
