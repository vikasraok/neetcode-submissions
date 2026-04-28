class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        const cache = Array.from({length:n},()=> 0);
        cache[1]=1;
        cache[2]=2;
        // const dfs = (i)=>{
        //     if(n<=2) return n
        //     if(i === n) return 1
        //     if(i > n) return 0
        //     if(cache[i] != -1) return cache[i];
        //     const result = dfs(i+1) + dfs(i+2)
        //     cache[i] = result;
        //     return result;
        // }
        for(let i=3; i<=n;i++){
            cache[i] = cache[i-1] +cache[i-2];
        }
        return cache[n]
    }
}
