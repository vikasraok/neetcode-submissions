class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        const res = [];
        const n = nums.length;
        const dfs = (idx, sum, current) => {
            if (sum < 0) return;
            if (sum === 0) res.push([...current]);
            for (let i = idx; i < n; i++) {
                current.push(nums[i]);
                dfs(i, sum - nums[i], current);
                current.pop();
            }
        };
        dfs(0, target, []);
        return res;
    }
}
