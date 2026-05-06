class MedianFinder {
    heap = (comparator = (a, b) => a - b) => {
        const h = [];

        const _bubbleUp = (i) => {
            while (i > 0) {
                const p = (i - 1) >> 1;
                if (comparator(h[p], h[i]) < 0) break;
                [h[p], h[i]] = [h[i], h[p]];
                i = p;
            }
        };
        const _bubbleDown = (i) => {
            while (true) {
                let idx = i;
                const l = 2 * i + 1,
                    r = 2 * i + 2;
                if (l < h.length && comparator(h[l], h[idx]) < 0) idx = l;
                if (r < h.length && comparator(h[r], h[idx]) < 0) idx = r;
                if (idx === i) break;
                [h[idx], h[i]] = [h[i], h[idx]];
                i = idx;
            }
        };
        return {
            size: () => h.length,
            peek: () => h[0],
            push: (val) => {
                h.push(val);
                _bubbleUp(h.length - 1);
            },
            pop: () => {
                const top = h[0];
                const last = h.pop();
                if (h.length > 0) {
                    h[0] = last;
                    _bubbleDown(0);
                }
                return top;
            },
        };
    };
    constructor() {
        this.small = this.heap((a, b) => b - a);
        this.large = this.heap();
    }

    /**
     *
     * @param {number} num
     * @return {void}
     */
    addNum(num) {
        this.small.push(num);
        if (this.small.peek() > this.large.peek()) {
            this.large.push(this.small.pop());
        }
        if (this.small.size() > this.large.size() + 1) {
            this.large.push(this.small.pop());
        }
        if (this.large.size() > this.small.size()) {
            this.small.push(this.large.pop());
        }
    }

    /**
     * @return {number}
     */
    findMedian() {
        if ((this.small.size() + this.large.size()) % 2 !== 0) {
            return this.small.peek();
        } else return (this.small.peek() + this.large.peek()) / 2;
    }
}
