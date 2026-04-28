class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        const result =[];
        function dfs(i,curr,total){
            if(total === target){
                result.push([...curr]);
                return;
            }
            if(i>= nums.length || total > target) return;

            curr.push(nums[i]);
            dfs(i,curr, total+nums[i]);
            curr.pop();
            dfs(i+1, curr, total);
        }
        dfs(0,[],0);
        return result
    }
}
