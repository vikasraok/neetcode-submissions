class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        // s is the string
        // k is the max characters that can be replaced.
        const freq = new Map();
        let maxFreq =0;
        let maxLength =0, left =0;
        for(let right =0; right< s.length; right++){
            const char = s[right];
            freq.set(char,(freq.get(char) || 0) +1);
            maxFreq = Math.max(maxFreq, freq.get(char));
            while ((right - left + 1) - maxFreq > k) {
                const leftChar = s[left];
                freq.set(leftChar, freq.get(leftChar) - 1);
                left++;
            }
            maxLength = Math.max(maxLength, right - left + 1);
        }
        return maxLength
    }
}
