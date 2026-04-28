class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const countMap = new Map();
        for (let num of nums){
            // count the occurence of the numbers
            /**
             * { 1 //number : 3 //frequency}
             */
            countMap.set(num, (countMap.get(num)|| 0) +1);
        }
        // object.entries(count) [[1,3]]
        // return Array.from(countMap.entries())
        //     // .filter(([, freq]) => freq >= k)
        //     .sort((a, b) => b[1] - a[1])
        //     .slice(0,k)
        //     .map(([num]) => num);
        //     }
        // const heap =[];
        // for (const [num,freq] of Array.from(countMap.entries())){
        //     // count the occurence of the numbers
        //     /**
        //      * { 1 //number : 3 //frequency}
        //      */
        //     heap.push([freq,num]);
        //     heap.sort((a,b)=> a[0]-b[0]);
        //     if(heap.length > k){
        //         heap.shift();
        //     }
            
        // }
        // const heap = new MinPriorityQueue((x))
        // return heap.map(([freq,num])=> num).reverse();

        // const heap = new MinPriorityQueue((x)=>x[1]);
        // for(const [num,freq] of Array.from(countMap.entries())){
        //     heap.enqueue([num,freq]);
        //     if(heap.size() > k) heap.dequeue();
        // }
        // const res =[]
        // for (let i=0; i< k; i++){
        //     const [num,freq] = heap.dequeue();
        //     res.push(num);
        // }
        // return res;


        const freq = Array.from({length: nums.length +1},()=>[]);

        for (const [n,] of countMap.entries()){
            freq[countMap.get(n)].push(n)
        }
        const res =[]
        for(let i=freq.length-1; i>0;i--){
            for(const n of freq[i]){
                res.push(n);
                if(res.length === k) return res
            }
        }
    }
}
