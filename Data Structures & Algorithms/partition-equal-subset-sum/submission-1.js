class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canPartition(nums) {
        const totalSum = nums.reduce((agg,num)=>{
            return agg+=num
        })
        const isOdd = totalSum % 2 !==0;
        if(isOdd) return false;
        const target = totalSum/2;
        const dfs= (i,currentSum)=>{
            if (currentSum === target) return true; 
            if (i === nums.length) return false;
            if (dfs(i+1, currentSum)) return true; 
            if (currentSum + nums[i] <= target && dfs(i+1, currentSum + nums[i])) return true;
        }
        return !!dfs(0,0)

    }
}
