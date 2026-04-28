class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins, amount) {
        if(amount ===0) return 0;
        const queue = [[0,0]];
        const seen = new Set([0]);
        while(!!queue.length){
            const [curr,steps] = queue.shift();
            for(let coin of coins){
                const next = curr + coin;
                if(next=== amount) return steps+1;
                if(next < amount && !seen.has(next)){
                    seen.add(next);
                    queue.push([next,steps+1])
                }
            }
        }
        return -1
    }
}
