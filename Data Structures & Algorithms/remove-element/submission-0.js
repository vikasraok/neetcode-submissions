class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let left = 0,
            right = nums.length;
        while (left < right) {
            if (nums[left] === val) {
                nums[left] = nums[--right]; 
            } else {
                left++;
            }
        }
        return left;
    }
}
