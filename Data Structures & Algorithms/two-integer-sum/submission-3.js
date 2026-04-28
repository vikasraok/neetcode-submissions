class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const numMap = new Map();
        for (let i in nums){
            numMap.set(nums[i],i);
        }
        for(let i in nums){
            const complement = target - nums[i];
            if(numMap.has(complement) && numMap.get(complement) != i){
                return [parseInt(i), parseInt(numMap.get(complement))]
            }
        }
    }
}
