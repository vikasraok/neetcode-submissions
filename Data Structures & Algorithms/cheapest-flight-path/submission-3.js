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
      let prices = Array.from({length:n},()=>inf);
      prices[src]=0
      for(let i=0; i<=k ;i++){
        const tmp = [...prices];
        for(let flight of flights){
          const [src,dst,cst] = flight;
          if(prices[src] !== inf){
            tmp[dst]= Math.min(tmp[dst],prices[src]+cst);
          }
        }
        prices = tmp
      }
      return prices[dst] === inf ? -1: prices[dst]
    }
}
