class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    leastInterval(tasks, n) {
        const freq = new Map();
        let maxFreq = 0;
        for(let task of tasks){
            const count =(freq.get(task)||0)+1
            freq.set(task, count);
            maxFreq=Math.max(maxFreq,count);
        }
        let countMax=0;
        for(let t of freq.values()){
            if(t=== maxFreq) countMax++;
        }
        const partCount = maxFreq-1;
        const partLength = n+1;
        const emptySlots  = partCount*partLength + countMax;
        return Math.max(tasks.length, emptySlots)
    }
}
