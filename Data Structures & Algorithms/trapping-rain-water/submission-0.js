class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let result = 0;
        let l = 0,
            r = height.length - 1;
        let maxLeft = 0,
            maxRight = 0;
        while (l < r) {
            maxLeft = Math.max(maxLeft, height[l]);
            maxRight = Math.max(maxRight, height[r]);
            if (maxLeft < maxRight) {
                result += maxLeft - height[l++];
            } else {
                result += maxRight - height[r--];
            }
        }
        return result
    }
}
