class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const pref = Array(nums.length);
        const suff = Array(nums.length);
        for (let i = 0; i < nums.length; i++) {
            pref[i] = (pref[i - 1] ?? 1) * (nums[i - 1] ?? 1);
        }
        for (let i = nums.length - 1; i >= 0; i--) {
            suff[i] = (suff[i + 1] ?? 1) * (nums[i + 1] ?? 1);
        }
        const result = [];
        for (let i = 0; i < nums.length; i++) {
            result.push(pref[i] * suff[i]);
        }
        return result;
    }
}
