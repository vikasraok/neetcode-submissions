class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let buyPrice = prices[0];
        let profit = -Infinity;
        for (let i = 0; i < prices.length; i++) {
            buyPrice = Math.min(prices[i], buyPrice);
            profit = Math.max(profit, prices[i] - buyPrice);
        }
        return profit;
    }
}
