class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {boolean}
     */
    wordBreak(s, wordDict) {
        const wordSet = new Set(wordDict)
        const memo = new Map();
        const dfs =(i)=>{
            if(i=== s.length) return true;
            if(memo.has(i)) return memo.get(i);
            for(let j=i; j< s.length;j++){
                if(wordSet.has(s.substring(i, j+1)) && dfs(j+1)){
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
