class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    lengthOfLIS(nums) {
        const dfs = (i,j)=>{
            if(i=== nums.length) return 0
            let lis = dfs(i+1,j);
            if(j==-1 || nums[j]<nums[i]){
                lis = Math.max(lis, 1+dfs(i+1,i))
            }
            return lis
        }
        return dfs(0,-1)
    }
}
