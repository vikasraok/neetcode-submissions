class Solution {
    /**
     * @param {number[][]} points
     * @return {number}
     */
    minheap = (
        comparator = (a, b) => {
            return a[0] - b[0];
        },
    ) => {
        const heap = [];
        const bubbleup = (i) => {
            while (i > 0) {
                const p = (i - 1) >> 1;
                if (comparator(heap[p], heap[i]) < 0) break;
                [heap[p], heap[i]] = [heap[i], heap[p]];
                i = p;
            }
        };
        const bubbledown = (i) => {
            while (true) {
                let t = i;
                const l = 2 * i + 1,
                    r = 2 * i + 2;
                if (l < heap.length && comparator(heap[l], heap[t]) < 0) t = l;
                if (r < heap.length && comparator(heap[r], heap[t]) < 0) t = r;
                if (t === i) break;
                [heap[t], heap[i]] = [heap[i], heap[t]];
                i = t;
            }
        };
        return {
            size: () => heap.length,
            peek: () => heap[0],
            push: (val) => {
                heap.push(val);
                bubbleup(heap.length - 1);
            },
            pop: () => {
                const t = heap[0];
                const l = heap.pop();
                if (heap.length) {
                    heap[0] = l;
                    bubbledown(0);
                }
                return t;
            },
        };
    };
    minCostConnectPoints(points) {
        const n = points.length;
        const dist = (i, j) =>
            Math.abs(points[i][0] - points[j][0]) + Math.abs(points[i][1] - points[j][1]);
        const heap = this.minheap();
        const visited = new Set();
        heap.push([0, 0]);
        let total = 0;

        while (heap.size()) {
            const [cost, i] = heap.pop();
            if (visited.has(i)) continue;
            visited.add(i);
            total += cost;
            for (let [j, point] of points.entries()) {
                if (visited.has(j)) continue;
                heap.push([dist(i, j), j]);
            }
        }
        return total
    }
}
