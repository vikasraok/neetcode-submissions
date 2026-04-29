class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const n = s.length;
        let l = 0;
        let res=0
        const set = new Set();
        for(let r=0;r< n;r++){
            while(set.has(s[r])){
                set.delete(s[l++]);
            }
            set.add(s[r])
            res= Math.max(res, r-l+1)
        }
        return res
    }
}
