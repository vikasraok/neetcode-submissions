class Solution {
    /**
     * @param {number[][]} grid
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
    swimInWater(grid) {
        const heap = this.minHeap();
        heap.push([grid[0][0], 0, 0]);
        const directions = [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1],
        ];
        const visited = new Set();
        const n = grid.length;
        while (heap.size()) {
            const [cost, x, y] = heap.pop();
            if (visited.has(x * n + y)) continue;
            visited.add(x * n + y);
            for (let [dx, dy] of directions) {
                const nx = x + dx,
                    ny = y + dy;
                if (nx < 0 || ny < 0 || nx >= n || ny >= n) continue;
                if (visited.has(nx * n + ny)) continue;
                const newCost = Math.max(cost, grid[nx][ny]);
                if (nx === n - 1 && ny === n - 1) return newCost;
                heap.push([newCost, nx, ny]);
            }
        }
        return -1
    }
}
