class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        if(nums.length === 1) return nums[0]
        let second = nums[0];
        let first = Math.max(nums[0], nums[1]);
        for (let i = 2; i < nums.length; i++) {
            const curr = Math.max(first, second + nums[i]);
            second = first;
            first = curr;
        }
        return first;
    }
}
