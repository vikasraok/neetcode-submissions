class Solution {
    /**
     * @param {number} amount
     * @param {number[]} coins
     * @return {number}
     */
    change(amount, coins) {
        const dp = Array.from({ length: amount + 1 }).fill(0);
        dp[0] = 1;
        for (let i = 0; i < coins.length; i++) {
            for (let j = 0; j <= amount; j++) {
                if (j < coins[i]) continue;
                dp[j] += dp[j - coins[i]];
            }
        }
        return dp[amount];
    }
}
