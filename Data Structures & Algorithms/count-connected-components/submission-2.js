
class Solution {
    countComponents(n, edges) {
       const adj = Array.from({length:n},()=>[]);
       for (const [x,y] of edges){
        adj[x].push(y);
        adj[y].push(x);
       }
       const visit = new Set();
       function dfs(node){
        if(visit.has(node)) return false;
        visit.add(node);
        for(const n of adj[node]){
            if(!visit.has(n)) dfs(n);
        }
        return true;
       }

       let count =0;
       for(let i=0; i<n; i++){
        if(!visit.has(i)){
            dfs(i);
            count++;
        }
       }
       return count
    }
}
