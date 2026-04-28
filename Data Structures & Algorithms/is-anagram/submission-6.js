class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length != t.length) return false;
        const a = new Array(26).fill(0);
        for(let i=0;i<s.length;i++){
            a[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
            a[t.charCodeAt(i) - 'a'.charCodeAt(0)]--;
        }
        return a.every((item)=> item ===0);
    }
}
