class Solution {
    /**
     * @param {string} digits
     * @return {string[]}
     */
    letterCombinations(digits) {
        if (!digits.length) return [];
        const map = {
            2: ["a", "b", "c"],
            3: ["d", "e", "f"],
            4: ["g", "h", "i"],
            5: ["j", "k", "l"],
            6: ["m", "n", "o"],
            7: ["p", "q", "r", "s"],
            8: ["t", "u", "v"],
            9: ["w", "x", "y", "z"],
        };
        const res = [];
        digits = digits.split("");
        const n = digits.length;
        const dfs = (ix, current) => {
            if (current.length === n) {
                res.push(current.join(""));
                return;
            }
            const num = digits[ix];
            const chars = map[num];
            for (let i = 0; i < chars.length; i++) {
                current.push(chars[i]);
                dfs(ix + 1, current);
                current.pop();
            }
        };
        dfs(0, []);
        return res;
    }
}
