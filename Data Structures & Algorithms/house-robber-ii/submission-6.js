class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        if (nums.length === 1) return nums[0];
        if (nums.length === 2) return Math.max(nums[0], nums[1]);
        let second = nums[0];
        let first = Math.max(nums[0], nums[1]);
        for (let i = 2; i < nums.length - 1; i++) {
            const curr = Math.max(first, second + nums[i]);
            second = first;
            first = curr;
        }
        first;
        let s = nums[1];
        let f = Math.max(nums[1], nums[2]);
        for (let i = 3; i < nums.length; i++) {
            const curr = Math.max(f, s + nums[i]);
            s = f;
            f = curr;
        }
        return Math.max(first, f);
    }
}
