class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        nums.sort((a,b)=> a-b);
        let hasDuplicates = false;
        for(let i=0; i< nums.length -1; i++){
            if(nums[i] === nums[i+1]) hasDuplicates = true;
        }
        return hasDuplicates
    }
}
