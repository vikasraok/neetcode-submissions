class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {
        let longest = ""
        const expand =(left,right)=>{
            while(s[left]===s[right] && left >-1  && right< s.length){
                left--;
                right++;
            }
            return s.substring(left+1,right);
        }
        for(let i=0; i< s.length;i++){
            const odd = expand(i,i);
            const even = expand(i,i+1);
            if(odd.length > even.length) {
                longest = longest.length > odd.length ? longest: odd
            }else{
                longest = longest.length > even.length ? longest:even
            }

        }
        return longest
    }
}
