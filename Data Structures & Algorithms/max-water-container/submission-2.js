class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let max = -Infinity;
        let l = 0,
            r = heights.length - 1;
        while (l < r) {
            const w = r - l;
            const len = Math.min(heights[l], heights[r]);
            max = Math.max(max, len * w);
            if (heights[l] < heights[r]) l++;
            else r--;
        }
        return max;
    }
}
