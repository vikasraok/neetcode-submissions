class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const isOpen = (ch) => ch === "(" || ch === "{" || ch === "[";
        if (!isOpen(s[0])) return false;
        const stack = [];
        for (let ch of s) {
            if (ch === "}" && stack.at(-1) === "{") stack.pop();
            else if (ch === "]" && stack.at(-1) === "[") stack.pop();
            else if (ch === ")" && stack.at(-1) === "(") stack.pop();
            else stack.push(ch);
        }
        return stack.length === 0
    }
}
