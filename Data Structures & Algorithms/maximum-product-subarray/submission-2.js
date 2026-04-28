class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums) {
        let maxSoFar = nums[0]; //12
        let minSoFar = nums[0]; //-3
        let result = nums[0];//12
        for(let i=1;i<nums.length;i++){
            const num =nums[i] //-2
            if(num<0){
                [maxSoFar,minSoFar]= [minSoFar,maxSoFar]
            }
            maxSoFar=Math.max(num,maxSoFar*num);
            minSoFar=Math.min(num,minSoFar*num);
            result=Math.max(result, maxSoFar)
        }
        return result
    }
}
