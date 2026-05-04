class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let l = 0,
            r = nums.length - 1;
        while (l <= r) {
            const mid = l + ((r - l) >> 1);
            if (nums[mid] === target) return mid;
            else if (nums[mid] < target) l = mid + 1;
            else r = mid - 1;
        }
        return -1;
    }
}
