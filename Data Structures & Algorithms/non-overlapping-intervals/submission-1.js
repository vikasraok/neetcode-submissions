class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number}
     */
    eraseOverlapIntervals(intervals) {
        const result = [];
        let removed = 0;
        let end = -Infinity;
        intervals.sort((a, b) => a[1] - b[1]);
        for (let [s, e] of intervals) {
            if (s < end) {
                removed++;
            } else end = e;
        }
        return removed;
    }
}
