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
        const memo = new Map();

        const dfs= (i,currentSum)=>{
            const key =`${i},${currentSum}`
            if(memo.has(key)) return memo.get(key);

            if (currentSum === target) return true; 
            if (i === nums.length) return false;

            const res = (dfs(i+1, currentSum)) || 
            (currentSum + nums[i] <= target 
            && dfs(i+1, currentSum + nums[i]));
            memo.set(key,res)
            return res;
        }
        return dfs(0,0)

    }
}
