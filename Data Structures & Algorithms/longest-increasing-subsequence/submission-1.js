class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    lengthOfLIS(nums) {
        const memo = new Map();
        const dfs = (i,j)=>{
            if(i=== nums.length) return 0
            const key =`${i},${j}`
            if(memo.has(key)) return memo.get(key);
            let lis = dfs(i+1,j);
            if(j===-1 || nums[j]<nums[i]){
                lis = Math.max(lis, 1+dfs(i+1,i))
            }
            memo.set(key,lis)
            return lis
        }
        return dfs(0,-1)
    }
}
