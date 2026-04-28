class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {boolean}
     */
    wordBreak(s, wordDict) {
        const dp = Array({length:s.length+1}).fill(false)
        dp[s.length] = true;
        for(let i=s.length-1;i>=0;i--){
            for(let w of wordDict){
                if(i+w.length<=s.length && s.substring(i,i+w.length)===w && dp[i+w.length]){
                    dp[i]=dp[i+w.length]
                }
                if(dp[i]){
                    break;
                }
            }
        }
        return dp[0]
    }
}
