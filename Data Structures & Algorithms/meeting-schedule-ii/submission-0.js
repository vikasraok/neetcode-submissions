/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {number}
     */
    minMeetingRooms(intervals) {
        const starts = [...intervals].map((t) => t.start).sort((a, b) => a - b);
        const ends = [...intervals].map((t) => t.end).sort((a, b) => a - b);
        let rooms = 0,
            e = 0;
        for (let s = 0; s < intervals.length; s++) {
            if (starts[s] < ends[e]) rooms++;
            else e++;
        }
        return rooms;
    }
}
