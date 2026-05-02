class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = [];
        let operand = 0;
        const isNum = (n) => /\d/.test(n);
        for (let i = 0; i < tokens.length; i++) {
            if (isNum(tokens[i])) stack.push(parseInt(tokens[i]));
            else {
                const a = stack.pop();
                const b = stack.pop();
                switch (tokens[i]) {
                    case "+":
                        stack.push(a + b);
                        break;
                    case "-":
                        stack.push(b - a);
                        break;
                    case "*":
                        stack.push(a * b);
                        break;
                    case "/":
                        if (a !== 0) stack.push(Math.trunc(b / a));
                        break;
                    default:
                        break;
                }
            }
        }
        return stack[0];
    }
}
