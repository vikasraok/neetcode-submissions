class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        intervals.sort((a, b) => a[0] - b[0]);
        const n = intervals.length;
        let result = [];
        for (let i = 0; i < n; i++) {
            const interval = intervals[i];
            if (i === 0) {
                result.push(interval);
                continue;
            }
            if (result.at(-1)[1] >= interval[0]) {
                result.at(-1)[1] = Math.max(result.at(-1)[1], interval[1]);
            } else result.push(interval);
        }
        return result;
    }
}
