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
            this.parent[rootX] = rootY;
            this.rank[rootY] +=1;
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
        if(n-1 !== edges.length) return false;
        const adj = Array.from({length:n},()=>[]);
        for(let [u,v] of edges){
            adj[u].push(v);
            adj[v].push(u);
        }

        const c = new Set();

        function dfs(node,parent){
            if(c.has(node)) return false;
            c.add(node);
            for(let n of adj[node]){
                if(n===parent) continue;
                if(c.has(n)) return false;
                if(!dfs(n,node)) return false;
            }
            return true;
        }
        if(!dfs(0,-1)) return false;
        return c.size === n
    }
}