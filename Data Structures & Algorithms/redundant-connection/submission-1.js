class Solution {
    /**
     * @param {number[][]} edges
     * @return {number[]}
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
        return (a, b) => {
            const pa = find(a),
                pb = find(b);
            if (pa === pb) return false;
            parent[pa] = pb;
            return true;
        };
    };
    findRedundantConnection(edges) {
        const union = this.union(edges.length+1);
        for (let [x, y] of edges) {
            if (!union(x, y)) return [x, y];
        }
    }
}
