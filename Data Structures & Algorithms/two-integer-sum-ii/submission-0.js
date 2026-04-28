class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let l = 0,
            r = nums.length - 1;
        while (l < r) {
            const sum = nums[l] + nums[r];
            if (sum === target) return [l + 1, r + 1];
            if (sum > target) r--;
            else l++
        }
        return [-1, -1];
    }
}
