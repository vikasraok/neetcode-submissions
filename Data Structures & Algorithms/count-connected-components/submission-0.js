class UnionFind{
    constructor(n){
        this.parent = Array.from({length:n},(_,i)=>i);
        this.rank = Array(n).fill(1);
        this.roots = new Set();
    }

    find(x){
        if(this.parent[x]===x) return x;
        this.parent[x] = this.find(this.parent[x]);
        this.roots.add(this.parent[x])
        return this.parent[x];
    }

    union(x,y){
        let rX = this.find(x);
        let rY = this.find(y);

        if(rX === rY) return false;
        if(this.rank[rX] < this.rank[rY]){
            this.parent[rX] = rY
        }else if(this.rank[rX] > this.rank[rY]){
            this.parent[rY] = rX
        }else {
            this.parent[rX] = rY;
            this.rank[rY] +=1
        }
        return true
    }
}

class Solution {
    countComponents(n, edges) {
        const _u = new UnionFind(n);
        for(const [u,v] of edges){
            _u.union(u,v);
        }
        let roots = new Set(); 
        for (let i = 0; i < n; i++) { 
            roots.add(_u.find(i)); // ensure path compression, get true root 
        } 
        return roots.size;
    }
}
