class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums) {
        let result = nums[0];//12
        let prefix=0;
        let suffix=0;
        for(let i=0;i<nums.length;i++){
            prefix= nums[i]* (prefix ===0 ? 1: prefix);
            suffix= nums[nums.length-1-i]*(suffix ===0?1:suffix);
            result=Math.max(result, Math.max(prefix,suffix))
        }
        return result === 0 ? 0 : result;
    }
}
