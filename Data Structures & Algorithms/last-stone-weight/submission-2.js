class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        const maxHeap = new MaxPriorityQueue();
        for(const stone of stones){
            maxHeap.push(stone);
        }
        while(maxHeap.size()>1){
            const stone1 = maxHeap.pop();
            const stone2 = maxHeap.pop();
            const difference = Math.abs(stone1-stone2);
            if(!!difference) maxHeap.push(difference);
        }
        return maxHeap.front() || 0;
    }
}
