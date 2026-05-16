class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJump(nums) {
        const n = nums.length;
        let maxReach = 0;
        let i = 0;
        while (i < n) {
            if (i > maxReach) return false;
            maxReach = Math.max(maxReach, i + nums[i]);
            i++
        }
        return true
    }
}
