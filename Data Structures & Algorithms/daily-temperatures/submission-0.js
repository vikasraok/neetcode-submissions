class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const stack = [];
        const n = temperatures.length;
        const result = Array(n).fill(0);
        for (let i = 0; i < n; i++) {
            const temp = temperatures[i];
            while (stack.length && temperatures[stack.at(-1)] < temp) {
                const idx = stack.pop();
                result[idx] = i - idx;
            }
            stack.push(i);
        }
        return result
    }
}
