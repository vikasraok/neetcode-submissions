class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins, amount) {
        const memo= new Map();
        const dfs =(i)=>{
            if(i===0) return 0;
            if(i<0) return Infinity;
            if(memo.has(i)) return memo.get(i)
            let minCoins = Infinity;
            for(let coin of coins){
                const res = dfs(i -coin);
                if(res!= Infinity){
                    minCoins = Math.min(minCoins, res+1)
                }
            }
            memo.set(i,minCoins);
            return minCoins;
        }
        let res = dfs(amount) 
        return res === Infinity ? -1 : res
    }
}
