class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        const maxHeap = new PriorityQueue((a,b) => b[0]-a[0] );
        const result =[];
        for(const [x,y] of points){
            const distance = x**2 + y**2
            maxHeap.enqueue([distance,[x,y]]);
            if(maxHeap.size() >k){
                maxHeap.dequeue();
            }
        }
        while(!maxHeap.isEmpty()){
            result.push(maxHeap.dequeue()[1])
        }
        return result
    }
}
