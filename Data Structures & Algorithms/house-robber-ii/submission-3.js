class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        const n = nums.length;
        if (n === 0) return 0;
        if (n === 1) return nums[0];
        if (n === 2) return Math.max(nums[0], nums[1]); // Helper: linear house robber
        const robLinear = (arr) => {
        let prev2 = arr[0];
        let prev1 = Math.max(arr[0], arr[1]);
        for (let i = 2; i < arr.length; i++) {
            let current = Math.max(prev1, prev2 + arr[i]);
            prev2 = prev1;
            prev1 = current;
        }
        return prev1;
        }; // Case 1: exclude last house
        const case1 = robLinear(nums.slice(0, n - 1)); // Case 2: exclude first house
        const case2 = robLinear(nums.slice(1));
        return Math.max(case1, case2);

    }
}
