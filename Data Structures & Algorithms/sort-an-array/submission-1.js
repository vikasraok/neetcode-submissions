class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArray(nums) {
        const buckets = Array(100001).fill(0);
        for (let num of nums) {
            buckets[num + 50000]++;
        }
        let i = 0;
        for (let j = 0; j < buckets.length; j++) {
            while (buckets[j]-- > 0) {
                nums[i++] = j - 50000;
            }
        }
        return nums;
    }
}
