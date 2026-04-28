class Solution {
    /**
     * @param {number} n
     * @param {number[][]} flights
     * @param {number} src
     * @param {number} dst
     * @param {number} k
     * @return {number}
     */
    findCheapestPrice(n, flights, src, dst, k) {
      const inf = Number.POSITIVE_INFINITY;
      let cost = Array(n).fill(inf);
      cost[src] =0;
      for(let i=0; i<=k; i++){
        let temp =[...cost];
        for(let [a,b,c] of flights){
          if(cost[a] != inf && cost[a]+c < temp[b]){
            temp[b] = cost[a] + c;
          }
        }
        cost = temp;
      }
      return cost[dst] === inf ? -1 : cost[dst]
    }
}
