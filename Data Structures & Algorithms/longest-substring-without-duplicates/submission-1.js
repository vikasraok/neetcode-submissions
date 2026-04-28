class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let length = 0;
        for(let i=0; i< s.length; i++){
            let charSet = new Set();
            for(let j=i;j<s.length; j++){
                if(charSet.has(s[j])) break;
                else charSet.add(s[j])
            }
            length = Math.max(length, charSet.size)
        }
        return length;
    }
}
