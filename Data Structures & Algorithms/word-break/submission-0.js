class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {boolean}
     */
    wordBreak(s, wordDict) {
        const wordSet = new Set(wordDict);
        const memo={};
        const dfs = (start)=>{
            if(start === s.length) return true;
            if(memo[start]!== undefined) return memo[start];

            for(let word of wordSet){
                if(s.startsWith(word,start)){
                    if(dfs(start+word.length)){
                        memo[start]=true;
                        return true;
                    }
                }
            }
            memo[start] = false;
            return false;
        }
        return dfs(0);
    }
}
