class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    maxHeap = () => {
        const heap = [];
        const _bubbleUp = (i) => {
            if (i === 0) return;
            const parent = (i - 1) >> 1;
            if (heap[parent] > heap[i]) return;
            [heap[parent], heap[i]] = [heap[i], heap[parent]];
            _bubbleUp(parent);
        };
        const _bubbleDown = (i) => {
            let b = i;
            const l = 2 * i + 1,
                r = 2 * i + 2;
            if (l < heap.length && heap[l] > heap[b]) b = l;
            if (r < heap.length && heap[r] > heap[b]) b = r;
            if (b === i) return;
            [heap[b], heap[i]] = [heap[i], heap[b]];
            _bubbleDown(b);
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
    lastStoneWeight(stones) {
        const heap = this.maxHeap();
        for (let stone of stones) {
            heap.push(stone);
        }
        while (heap.size() > 1) {
            const a = heap.pop();
            const b = heap.pop();
            if (a === b) continue;
            else heap.push(Math.abs(a - b));
        }
        return heap.peek() ?? 0;
    }
}
