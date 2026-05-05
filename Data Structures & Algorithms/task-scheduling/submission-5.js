class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    maxHeap = (comparator = (a, b) => b - a) => {
        const heap = [];
        const _bubbleUp = (i) => {
            while (i > 0) {
                const parent = (i - 1) >> 1;
                if (comparator(heap[parent], heap[i]) < 0) break;
                [heap[parent], heap[i]] = [heap[i], heap[parent]];
                i = parent;
            }
        };
        const _bubbleDown = (i) => {
            while (i < heap.length) {
                let b = i;
                const l = 2 * i + 1,
                    r = 2 * i + 2;
                if (l < heap.length && comparator(heap[l], heap[b]) < 0) b = l;
                if (r < heap.length && comparator(heap[r], heap[b]) < 0) b = r;
                if (b === i) return;
                [heap[b], heap[i]] = [heap[i], heap[b]];
                i = b;
            }
        };
        const size = () => heap.length;
        const peek = () => heap[0];
        const push = (val) => {
            heap.push(val);
            _bubbleUp(heap.length - 1);
        };
        const pop = () => {
            const top = heap[0];
            const last = heap.pop();
            if (heap.length) {
                heap[0] = last;
                _bubbleDown(0);
            }
            return top;
        };
        return { size, pop, push, peek };
    };
    leastInterval(tasks, n) {
        const q = [];
        const heap = this.maxHeap();
        let arr = Array(26).fill(0);
        for (let task of tasks) {
            arr[task.charCodeAt(0) - "A".charCodeAt(0)]++;
        }
        arr.forEach((count, i) => {
            if (count > 0) heap.push(count);
        });
        let t = 0;
        while (heap.size() || q.length) {
            while (q?.[0]?.[1] <= t) {
                const [count] = q.shift();
                heap.push(count);
            }
            if (heap.size()) {
                const count = heap.pop();
                if (count > 1) {
                    q.push([count - 1, t + n + 1]);
                }
            } else {
                t = q[0][1];
                continue;
            }
            t++;
        }
        return t;
    }
}
