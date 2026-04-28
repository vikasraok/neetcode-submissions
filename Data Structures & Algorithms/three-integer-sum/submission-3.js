class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a, b) => a - b);
        const n = nums.length;
        const result = [];
        for (let i = 0; i < n - 2; i++) {
            if (i > 0 && nums[i] === nums[i - 1]) continue;

            let l = i + 1,
                r = n - 1;
            while (l < r) {
                const sum = nums[l] + nums[r] + nums[i];
                if (sum === 0) {
                    result.push([nums[l], nums[r], nums[i]]);
                    while (l < r && nums[l] === nums[l + 1]) l++;
                    while (l < r && nums[r] === nums[r - 1]) r++;
                    l++;r--;
                } else if (sum > 0) r--;
                else l++;
            }
        }
        return result;
    }
}
