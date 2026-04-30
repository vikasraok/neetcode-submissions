class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {



        /**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
const chartoIndex = (ch) => ch.charCodeAt(0) - 97;

    if (s1.length > s2.length) return false;
    const s1count = Array(26).fill(0)
    for (let ch of s1) {
        s1count[chartoIndex(ch)]++
    }

    const s2count = Array(26).fill(0)
    for (let i = 0; i < s1.length; i++) {
        s2count[chartoIndex(s2[i])]++
    }

    let matches = 0;
    for (let i = 0; i < 26; i++) {
        if (s1count[i] === s2count[i]) matches++
    }
    if (matches === 26) return true
    let l = 0;
    for (let r = s1.length; r < s2.length; r++) {
        const lChar = s2[l]
        const rChar = s2[r]
        const ri = chartoIndex(rChar)
        if (matches === 26) return true
        if (s2count[ri] === s1count[ri]) matches--
        s2count[ri]++
        if (s2count[ri] === s1count[ri]) matches++
        const li = chartoIndex(lChar)
        if (s2count[li] === s1count[li]) matches--
        s2count[li]--
        if (s2count[li] === s1count[li]) matches++
        l++
    }
    return (matches === 26)
    }
}
