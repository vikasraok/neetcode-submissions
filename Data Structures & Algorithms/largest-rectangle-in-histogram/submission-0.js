class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        const stack = [];
        let res = 0;
        heights.push(0);
        for (let [i, height] of heights.entries()) {
            while (stack.length && heights[stack.at(-1)] > height) {
                const idx = stack.pop();
                const l = heights[idx];
                const b = stack.length ? i - stack.at(-1) - 1 : i;
                res = Math.max(l * b, res);
            }
            stack.push(i);
        }
        return res;
    }
}
