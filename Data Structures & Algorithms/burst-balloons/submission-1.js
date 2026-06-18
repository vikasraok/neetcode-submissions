class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxCoins(nums) {
        const len = nums.length;
        const padded = [1, ...nums, 1];
        const dp = Array(len + 2)
            .fill(undefined)
            .map((_) => Array(len + 2).fill(0));
        for (let length = 2; length < padded.length; length++) {
            for (let i = 0; i < padded.length - length; i++) {
                const j = i + length;
                for (let k = i + 1; k < j; k++) {
                    dp[i][j] = Math.max(
                        dp[i][j],
                        dp[i][k] + padded[i] * padded[k] * padded[j] + dp[k][j],
                    );
                }
            }
        }
        return dp[0][len + 1];
    }
}
