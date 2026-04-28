class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const complement = new Map();
        for (let [i, num] of nums.entries()) {
            if (complement.has(target - num)) {
                return [i, complement.get(target - num)];
            }
            complement.set(num, i);
        }
        return [-1, -1];
    }
}
