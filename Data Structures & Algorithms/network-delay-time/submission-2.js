class Solution {
    /**
     * @param {number[][]} times
     * @param {number} n
     * @param {number} k
     * @return {number}
     */
    minheap = (
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
    networkDelayTime(times, n, k) {
        const dist = new Map();
        for (let i = 1; i <= n; i++) {
            if (i !== k) dist.set(i, Infinity);
            else dist.set(i, 0);
        }
        const adj = new Map();
        for (let [u, v, c] of times) {
            if (!adj.has(u)) adj.set(u, []);
            adj.get(u).push([v, c]);
        }
        const visited = new Set();
        const heap = this.minheap();
        heap.push([0, k]);
        while (heap.size()) {
            const [cost, node] = heap.pop();
            if (visited.has(node)) continue;
            visited.add(node);
            for (let [nei, c] of adj.get(node) || []) {
                const newCost = cost + c;
                if (newCost < dist.get(nei)) {
                    dist.set(nei, newCost);
                    heap.push([newCost, nei]);
                }
            }
        }
        const ans = Math.max(...dist.values());
        return ans === Infinity ? -1 : ans;
    }
}
