class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const count = {}
        const result =[];
        for (let num of nums){
            // count the occurence of the numbers
            count[num] = (count[num] || 0) + 1;
        }
        return Object.entries(count).sort((a, b) => b[1]-a[1]).slice(0,k).map(item=> parseInt(item[0]));
    }
}
