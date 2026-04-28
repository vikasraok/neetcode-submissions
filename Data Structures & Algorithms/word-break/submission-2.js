class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {boolean}
     */
    wordBreak(s, wordDict) {
        const memo = new Map();
        const dfs =(i)=>{
            if(i=== s.length) return true;
            if(memo.has(i)) return memo.get(i);
            for(let w of wordDict){
                if(w===s.substring(i, i+w.length) && dfs(i+w.length)){
                    memo.set(i, true);
                    return true
                }
            }
            memo.set(i, false);
            return false
        }
        return dfs(0)
    }
}
