class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    union = (n) => {
        const parent = Array(n)
            .fill(null)
            .map((_, i) => i);
        const find = (x) => {
            if (parent[x] !== x) {
                parent[x] = find(parent[x]);
            }
            return parent[x];
        };
        const union = (x, y) => {
            const px = find(x),
                py = find(y);
            if (px === py) return false;
            else parent[px] = py;
            return true;
        };
        return {
            find,
            union,
        };
    };
    validTree(n, edges) {
        const uf = this.union(n);
        for (let [x, y] of edges) {
            if (!uf.union(x, y)) return false;
            n--;
        }
        return n === 1;
    }
}
