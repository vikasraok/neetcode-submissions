class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const keyArray = Array(26).fill(0);
        const lookup = new Map();
        const A = "a".charCodeAt(0);
        for (let str of strs) {
            let key = [...keyArray];
            for (let ch of str) {
                const keyChar = ch.charCodeAt(0) - A;
                key[keyChar]++;
            }
            key = key.join(",");
            if (!lookup.has(key)) lookup.set(key, []);
            lookup.get(key).push(str);
        }
        return Array.from(lookup.values());
    }
}
