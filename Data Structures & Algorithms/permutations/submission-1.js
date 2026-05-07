class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        const res = [];
        const n = nums.length;
        const dfs = (current, used) => {
            if (current.length === n) {
                res.push([...current]);
                return;
            }
            for (let i = 0; i < n; i++) {
                if (used[i]) continue;
                used[i] = true;
                current.push(nums[i]);
                dfs(current, used);
                current.pop();
                used[i] = false;
            }
        };
        dfs([], new Array(n).fill(false));
        return res;
    }
}
