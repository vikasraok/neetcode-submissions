class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const newString = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
        const length =  newString.length;
        let i=0, j=length-1;
        while(i < Math.floor(length/2)){
            if (newString[i] === newString[j]) {
                i++;
                j--;
            } else {
                return false;
            }
        }
        return true;
    }
}
