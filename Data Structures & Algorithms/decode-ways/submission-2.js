class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    numDecodings(s) {
        const dfs=(i)=>{
            if(i===s.length) return 1;
            if(s[i]==='0') return 0;
            let res=dfs(i+1);
            if(i< s.length -1){
                const num= Number(s[i])*10+Number(s[i+1])
                if(num>=10 && num<=26){
                    res +=dfs(i+2)
                }
            }
            return res
        }
        return dfs(0)
    }
}
