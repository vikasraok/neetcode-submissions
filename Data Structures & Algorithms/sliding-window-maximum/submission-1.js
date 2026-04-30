class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        let res = [];
        let maxQueue = [];
        for (let r = 0; r < nums.length; r++) {
            while (maxQueue.length && nums[maxQueue.at(-1)] <= nums[r]) maxQueue.pop();
            maxQueue.push(r);
            if (maxQueue[0] <= r - k) maxQueue.shift();
            if (r >= k - 1) res.push(nums[maxQueue[0]]);
        }
        return res;
    }
}
