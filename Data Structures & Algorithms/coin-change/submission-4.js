class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins, amount) {
        const memo= new Map();
        const dfs =(i,rem)=>{
            if(rem===0) return 0;
            if(i=== coins.length || rem<0) return Infinity;
            const key=`${i}-${rem}`
            if(memo.has(key)) return memo.get(key);
            const take = 1+dfs(i, rem-coins[i]);
            const skip= dfs(i+1,rem)
            memo.set(key, Math.min(take,skip));
            return memo.get(key)
        }
        let res = dfs(0,amount) 
        return res === Infinity ? -1 : res
    }
}
