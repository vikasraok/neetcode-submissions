class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const hash = new Set()
        for (let value of nums){
            if(hash.has(value)){
                return true;
            }else{
                hash.add(value);
            }
        }
        return false;
    }
}
