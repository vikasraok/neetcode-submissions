class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let hold = -Infinity;
        let sold = -Infinity;
        let cool = 0;
        for (let price of prices) {
            const prevHold = hold;
            const prevSold = sold;
            const prevCool = cool;
            hold = Math.max(prevHold, prevCool - price);
            sold = prevHold + price;
            cool = Math.max(prevCool, prevSold);
        }
        return Math.max(sold, cool)
    }
}
