class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    heap = (comparator = (a, b) => a - b) => {
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
    findKthLargest(nums, k) {
        const minHeap = this.heap();
        for (let num of nums) {
            minHeap.push(num);
            if (minHeap.size() > k) minHeap.pop();
        }
        return minHeap.peek()
    }
}
