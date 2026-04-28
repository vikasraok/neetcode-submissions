class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        const cache = Array.from({length:n},()=> -1);
        const dfs = (i)=>{
            if(i === n) return 1
            if(i > n) return 0
            if(cache[i] != -1) return cache[i];
            const result = dfs(i+1) + dfs(i+2)
            cache[i] = result;
            return result;
        }
        return dfs(0)
    }
}
