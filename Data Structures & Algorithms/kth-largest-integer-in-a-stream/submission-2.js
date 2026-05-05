class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
        this.heap = [];
        this.k = k;
        for (let num of nums) {
            this.add(num);
        }
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
        this.heap.push(val);
        let i = this.heap.length - 1;
        while (i > 0) {
            const parent = (i - 1) >> 1;
            if (this.heap[parent] < this.heap[i]) break;
            [this.heap[parent], this.heap[i]] = [this.heap[i], this.heap[parent]];
            i = parent;
        }
        while (this.heap.length > this.k) {
            const last = this.heap.pop();
            this.heap[0] = last;
            let i = 0;
            while (true) {
                let smallest = i;
                const left = 2 * i + 1;
                const right = 2 * i + 2;
                if (left < this.heap.length && this.heap[left] < this.heap[smallest])
                    smallest = left;
                if (right < this.heap.length && this.heap[right] < this.heap[smallest])
                    smallest = right;
                if (smallest === i) break;
                [this.heap[smallest], this.heap[i]] = [this.heap[i], this.heap[smallest]];
                i = smallest;
            }
        }
        return this.heap[0];
    }
}
