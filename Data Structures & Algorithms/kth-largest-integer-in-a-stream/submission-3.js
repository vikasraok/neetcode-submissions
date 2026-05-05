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
    _push(val) {
        this.heap.push(val);
        this._bubbleUp(this.heap.length - 1);
    }
    _pop() {
        const top = this.heap[0];
        const last = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = last;
            this._bubbleDown(0);
        }
        return top;
    }
    _bubbleUp(i) {
        if (i === 0) return;
        const parent = (i - 1) >> 1;
        if (this.heap[parent] < this.heap[i]) return;
        [this.heap[parent], this.heap[i]] = [this.heap[i], this.heap[parent]];

        this._bubbleUp(parent);
    }
    _bubbleDown(i) {
        let smallest = i;
        const left = 2 * i + 1;
        const right = 2 * i + 2;
        if (left < this.heap.length && this.heap[left] < this.heap[smallest]) smallest = left;
        if (right < this.heap.length && this.heap[right] < this.heap[smallest]) smallest = right;
        if (smallest === i) return;
        [this.heap[smallest], this.heap[i]] = [this.heap[i], this.heap[smallest]];
        this._bubbleDown(smallest);
    }
    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
        this._push(val);
        if (this.heap.length > this.k) this._pop();
        return this.heap[0];
    }
}
