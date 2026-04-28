class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        const best = Array.from({length: nums.length}).fill(0)
        best[0] = nums[0];
        best[1] = Math.max(nums[0],nums[1]);
        for(let i=2;i<nums.length;i++){
            if(best[i-1] > best[i-2] + nums[i]){
                best[i] = best[i-1]
            }else{
                best[i] = best[i-2] + nums[i]
            }
        }
        return best[nums.length-1]
    }
}
