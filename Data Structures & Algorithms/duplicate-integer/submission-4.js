class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */

    hasDuplicate(nums) {
        const hashMap = new Map();
        for(let i=0; i< nums.length; i++){
            const value = hashMap.get(nums[i]);
            if(value) return true;
            else hashMap.set(nums[i], true)
        }
        return false;
    }
}
