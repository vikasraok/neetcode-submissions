class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const freq = new Map();
        for (let num of nums) {
            freq.set(num, (freq.get(num) ?? 0) + 1);
        }
        const bucket = Array(nums.length + 1)
            .fill(null)
            .map(() => []);
        for (let [num, count] of freq) {
            bucket[count].push(num);
        }
        const result = [];
        for (let i = bucket.length - 1; i >= 0 && result.length < k; i--) {
            const arr = bucket[i];
            for (let j = 0; j < arr.length && result.length < k; j++) {
                result.push(arr[j]);
            }
        }
        return result;
    }
}
