class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if (!s || !t || s.length < t.length) return "";
        const freq = new Map();
        for (const char of t) {
            freq.set(char, (freq.get(char) || 0) + 1);
        }
        let minLen = Infinity, minStart =0;
        let left =0, right =0;
        let required = freq.size;
        let formed =0;
        let result = "";
        const windowCounts = new Map();

        while(right < s.length){
            const char= s[right];
            windowCounts.set(char, (windowCounts.get(char) || 0)+1);
            if(freq.has(char) && windowCounts.get(char) === freq.get(char)){
                formed++;
            }
            while (left <= right && formed === required){
                if(right -left +1 < minLen){
                    minLen = right -left+1;
                    minStart = left;
                }
                const leftChar = s[left];
                windowCounts.set(leftChar, windowCounts.get(leftChar) - 1);
                if (freq.has(leftChar) && windowCounts.get(leftChar) < freq.get(leftChar)) {
                    formed--;
                }
                left++;
            }
            right ++;
        }

           return minLen === Infinity ? "" : s.substring(minStart, minStart + minLen);;
    }
}
