class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        const res = [];
        const n = nums.length;
        nums.sort((a, b) => a - b);
        const dfs = (ix, current) => {
            res.push([...current]);
            for (let i = ix; i < n; i++) {
                while (i > ix && nums[i] === nums[i - 1]) i++;
                if (i >= n) break;
                current.push(nums[i]);
                dfs(i + 1, current);
                current.pop();
            }
        };
        dfs(0, []);
        return res;
    }
}
