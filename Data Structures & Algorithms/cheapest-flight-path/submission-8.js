class Solution {
    /**
     * @param {number} n
     * @param {number[][]} flights
     * @param {number} src
     * @param {number} dst
     * @param {number} k
     * @return {number}
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
    findCheapestPrice(n, flights, src, dst, k) {
        let prices = Array(n).fill(Infinity);
        prices[src] = 0;
        for (let i = 0; i <= k; i++) {
            const temp = [...prices];
            for (const [from, to, price] of flights) {
                if (prices[from] === Infinity) continue;
                temp[to] = Math.min(temp[to], prices[from] + price);
            }
            prices = temp;
        }
        return prices[dst] === Infinity ? -1 : prices[dst]
    }
}
