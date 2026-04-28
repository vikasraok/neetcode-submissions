class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    numDecodings(s) {
        if (s[0] === '0') return 0;
        if(s.length ===1) return 1;
        const p = Array(s.length+1).fill(0);
        p[0]=1;
        p[1]=1;
        for(let i=2; i<=s.length;i++){
            const num = Number(s[i-2])*10+Number(s[i-1])
            if(Number(s[i-1])>0) p[i] += p[i-1]
            if(num <= 26 && num >=10){
                p[i]+=p[i-2];
            }
        }
        return p[s.length]
    }
}
