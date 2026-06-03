class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let elem = Infinity;
        let count = 0;
        for (let num of nums) {
            if (count === 0) elem = num
            if (num === elem) count++;
            else count--
        }
        return elem;
    }
}
