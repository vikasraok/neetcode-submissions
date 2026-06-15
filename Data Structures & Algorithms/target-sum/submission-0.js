class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    findTargetSumWays(nums, target) {
        let dp = new Map([[0, 1]]);
        for (let num of nums) {
            const next = new Map();
            for (let [sum, count] of dp) {
                next.set(sum + num, (next.get(sum + num) ?? 0) + count);
                next.set(sum - num, (next.get(sum - num) ?? 0) + count);
            }
            dp = next;
        }

        return dp.get(target) ?? 0;
    }
}
