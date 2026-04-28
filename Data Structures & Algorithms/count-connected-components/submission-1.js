class UnionFind{
    constructor(n){
        this.parent = Array.from({length:n},(_,i)=>i);
        this.rank = Array(n).fill(1);
    }

    find(x){
        if(this.parent[x]===x) return x;
        this.parent[x] = this.find(this.parent[x]);
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
        let res =n;
        for(const [u,v] of edges){
            if(_u.union(u,v)){
                res--;
            }
        }
        return res;
    }
}
