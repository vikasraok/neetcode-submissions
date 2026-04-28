class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        const length  = prices?.length; // length of the array
        let profit = 0; // initialise profit
        let left=0 , right=1;
        while(right< length){
            profit= Math.max(profit, prices[right]-prices[left])
            if(prices[left] < prices[right]){
                profit= Math.max(profit, prices[right]-prices[left])
            }else {
                left=right;
            }
            right++
        }
        return profit;
    }
}
