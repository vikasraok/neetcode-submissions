class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost) {
        let first = 0,
            second = 0;
        for (let i = 2; i <= cost.length; i++) {
            const curr = Math.min(first + cost[i - 1], second + cost[i - 2]);
            second = first;
            first = curr;
        }
        return first;
    }
}
