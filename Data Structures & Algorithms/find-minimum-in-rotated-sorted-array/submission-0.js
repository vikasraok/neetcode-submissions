class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let min = Infinity;
        for(let key in nums){
            min = Math.min(min, nums[key]);
        }
        return min
    }
}
