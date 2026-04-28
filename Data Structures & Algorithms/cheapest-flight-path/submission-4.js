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
      const adj = Array.from({length:n}, ()=>[])
      let prices = Array.from({length:n},()=>inf);
      prices[src]=0;
      for(let flight of flights){
        const [src,dst,cst]= flight;
        adj[src].push([dst,cst]);
      }

      const queue = [];
      queue.push([0,src,0]);
      while(!!queue.length){
        const [cost,city,stops] = queue.shift();
        if(stops>k) continue;
        for(let flight of adj[city]){
          const [nei,price] = flight;
          const nextCost = cost + price;
          if(nextCost < prices[nei]){
            prices[nei] = nextCost;
            queue.push([nextCost,nei,stops+1]);
          }
        }
      }
      return prices[dst] !== inf ? prices[dst] : -1
    }
}
