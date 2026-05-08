class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} queries
     * @return {number[]}
     */
    minHeap = (
        comparator = (a, b) => {
            return a[0] - b[0];
        },
    ) => {
        const heap = [];
        const bubbleUp = (i) => {
            while (i > 0) {
                const parent = (i - 1) >> 1;
                if (comparator(heap[parent], heap[i]) < 0) break;
                [heap[parent], heap[i]] = [heap[i], heap[parent]];
                i = parent;
            }
        };
        const bubbleDown = (i) => {
            while (true) {
                let s = i;
                const l = 2 * i + 1,
                    r = 2 * i + 2;
                if (l < heap.length && comparator(heap[l], heap[s]) < 0) s = l;
                if (r < heap.length && comparator(heap[r], heap[s]) < 0) s = r;
                if (s === i) break;
                [heap[s], heap[i]] = [heap[i], heap[s]];
                i = s;
            }
        };
        return {
            size: () => heap.length,
            peek: () => heap[0],
            push: (val) => {
                heap.push(val);
                bubbleUp(heap.length - 1);
            },
            pop: () => {
                const top = heap[0];
                const last = heap.pop();
                if (heap.length) {
                    heap[0] = last;
                    bubbleDown(0);
                }
                return top;
            },
        };
    };
    minInterval(intervals, queries) {
        intervals.sort((a, b) => a[0] - b[0]);
        const sQueries = queries.map((q, i) => [q, i]).sort((a, b) => a[0] - b[0]);
        const heap = this.minHeap();
        const result = Array(queries.length).fill(-1);
        let i = 0;
        for (let [q, idx] of sQueries) {
            while (i < intervals.length && intervals[i][0] <= q) {
                const [s, e] = intervals[i++];
                heap.push([e - s + 1, e]);
            }
            while (heap.size() && heap.peek()[1] < q) heap.pop();
            if (heap.size()) result[idx] = heap.peek()[0];
        }
        return result;
    }
}
