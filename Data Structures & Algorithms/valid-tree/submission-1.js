class UnionFind{
    constructor(n){
        this.parent = Array.from({length: n}, (_, i) => i);
        this.rank = Array(n).fill(1);
    }
    find(x){
        if(this.parent[x]!== x){
            this.parent[x] = this.find(this.parent[x]);
        }
        return this.parent[x]
    }

    union(x,y){
        let rootX = this.find(x);
        let rootY= this.find(y);

        if(rootX === rootY) return false;
        if(this.rank[rootX] > this.rank[rootY]){
            this.parent[rootY] = rootX
        }else if(this.rank[rootX] < this.rank[rootY]){
            this.parent[rootX] = rootY
        }else{
            this.parent[rootY] = rootX;
            this.rank[rootX] +=1;
        }
        return true;
    }
}
class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    /**
     * Valid tree:
     * 1. No cycles (kahns)
     * 2. Connected
     * */

    validTree(n, edges) {
        if (edges.length !== n - 1) return false;
        const uf = new UnionFind(n);
        for (let [u, v] of edges) {
            if (!uf.union(u, v)) return false; // Cycle found 
        }
        return true
    }
}