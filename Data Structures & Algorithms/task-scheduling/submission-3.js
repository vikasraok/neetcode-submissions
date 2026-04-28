class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    leastInterval(tasks, n) {
        const freq = new Map();
        for(let task of tasks){
            const count =(freq.get(task)||0)+1
            freq.set(task, count);
        }
        let heap = new MaxPriorityQueue();
        for(let t of freq.values()){
            heap.enqueue(t,t);
        }
        let time =0;
        const queue=[];
        while(!heap.isEmpty() || queue.length>0) {
            time++;
            if(!heap.isEmpty()){
                let cnt = heap.dequeue()-1;
                if(cnt>0){
                    queue.push([cnt,time+n]);
                }
            }
            if(queue.length > 0 && queue[0][1] === time){
                const [cnt] = queue.shift();
                heap.enqueue(cnt,cnt);
            }
        }
        return time
    }
}
