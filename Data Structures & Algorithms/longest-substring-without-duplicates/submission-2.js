class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let length = 0;
        let left = 0;
        const charSet = new Set();
        for (let r=0; r < s.length; r++){
            while(charSet.has(s[r])){
                charSet.delete(s[left]);
                left++;
            }
            charSet.add(s[r]);
            length = Math.max(length, r-left +1)
        }

        return length;
    }
}
