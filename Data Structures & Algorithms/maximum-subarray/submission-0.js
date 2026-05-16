class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let currSum = 0;
        let max = -Infinity;
        for (let num of nums) {
            currSum += num;
            max = Math.max(currSum, max);
            if (currSum < 0) {
                currSum = 0;
            }
        }
        return max;
    }
}
