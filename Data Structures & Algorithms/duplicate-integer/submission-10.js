class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const freq = new Map();
        for (let num of nums) {
            if(freq.get(num)) return true
            freq.set(num,1)
        }
        return false
    }
}
