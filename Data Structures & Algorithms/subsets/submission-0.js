class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        const res = [];
        const dfs = (idx, current) => {
            res.push([...current]);
            for (let i = idx; i < nums.length; i++) {
                current.push(nums[i]);
                dfs(i + 1, current);
                current.pop();
            }
        };
        dfs(0, []);
        return res;
    }
}
