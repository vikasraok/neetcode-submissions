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
      const adj = Array.from({length:n},()=>[]);
      const dist = Array.from({length:n},()=>Array(k+2).fill(inf));
      for(let [s,d,p] of flights){
        adj[s].push([d,p])
      }
      dist[src][0]= 0;
      const minHeap = new MinPriorityQueue((entry)=> entry[0]);
      minHeap.push([0,src,-1]);
      while(!minHeap.isEmpty()){
        const [cost,city,stops] = minHeap.pop();
        if(city===dst) return cost;
        if(stops===k || dist[city][stops+1] < cost) continue; 
        for (let [d,p] of adj[city]){
          const nextCost = cost + p;
          const nextStop = stops + 1;
          if(nextCost < dist[d][nextStop+1]){
            dist[d][nextStop+1]= nextCost;
            minHeap.push([nextCost,d,nextStop])
          }
        }
      }
      return -1;
    }
}
