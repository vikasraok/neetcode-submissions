class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        if(!nums.length) return 0;
        if(nums.length === 1) return nums[0]
        let prev2 = nums[0];
        let prev1 = Math.max(nums[0],nums[1]);
        let current =0;
        for(let i=2; i< nums.length-1; i++){
            current = Math.max(prev1, prev2+ nums[i]);
            prev2= prev1;
            prev1= current;
        }
        if(nums.length ===2) return prev1
        let prev21 = nums[1];
        let prev11 = Math.max(nums[2],nums[1]);
        for(let i=3; i< nums.length; i++){
            current = Math.max(prev11, prev21+ nums[i]);
            prev21= prev11;
            prev11= current;
        }
        return Math.max(prev1, prev11)
    }
}
