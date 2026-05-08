class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        let first = 1,
            second = 1;
        for (let i = 2; i <= n; i++) {
            const curr = first + second;
            second = first;
            first = curr;
        }
        return first;
    }
}
