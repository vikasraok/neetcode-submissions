class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];
        const closeToOpen = {
            ')': '(',
            ']': '[',
            '}': '{',
        };

        for (let char of s){
            if(closeToOpen[char]){
                // find the matching open bracket
                if(stack.length > 0 && stack[stack.length - 1] === closeToOpen[char]) {
                    stack.pop();
                }else{
                    return false;
                }
            } else {
                stack.push(char)
            }
        }
        return stack.length === 0;
    }
}
