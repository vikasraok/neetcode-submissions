class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        const length  = prices?.length; // length of the array
        let maxProfit = 0; // initialise profit
        if(!length) return maxProfit; // null check for array.
        for(let i=0; i< length; i++){
            const buyPrice = prices[i];
            for(let j=i+1; j< length; j++){
                const sellPrice = prices[j];
                maxProfit = Math.max(maxProfit, sellPrice - buyPrice);
            }
        }
        return maxProfit;
    }
}
