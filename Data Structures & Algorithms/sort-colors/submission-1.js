class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        let zero = 0;
        let two = nums.length - 1;
        let one = 0;
        while (one <= two) {
            if (nums[one] === 0) {
                [nums[zero], nums[one]] = [nums[one], nums[zero]];
                zero++;
                one++;
            } else if (nums[one] === 2) {
                [nums[two], nums[one]] = [nums[one], nums[two]];
                two--;
            } else one++;
        }
        return nums;
    }
}
