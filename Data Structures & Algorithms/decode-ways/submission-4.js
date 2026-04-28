class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    numDecodings(s) {
        if (s[0] === '0') return 0;
        let one =1;
        let two=0;
    
        for(let i=s.length-1; i>=0;i--){
            let current =0;

            if(s[i]!== '0'){
                current = one;
                const num = Number(s[i])*10+Number(s[i+1])
                if(num<=26 && num>=10){
                    current += two;
                }
            }
            two=one;
            one=current
        }
        return one
    }
}
