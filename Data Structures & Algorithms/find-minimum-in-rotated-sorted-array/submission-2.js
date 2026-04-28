class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        const binarySearch = (left, right) => {
            if (left === right) return nums[left];

            const mid = Math.floor((left + right) / 2);

            if (nums[mid] > nums[right]) {
                return binarySearch(mid + 1, right);
            } else {
                return binarySearch(left, mid);
            }
        };
        return binarySearch(0,nums.length-1)
    }
}
