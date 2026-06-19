class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const suff = Array(nums.length);
        let runProd = 1;
        for (let i = nums.length - 1; i >= 0; i--) {
            const num = nums[i];
            suff[i] = (suff[i + 1] ?? 1) * num;
        }
        for (let [i, num] of nums.entries()) {
            suff[i] = (suff[i + 1] ?? 1) * runProd;
            runProd = runProd * num;
        }
        return suff;
    }
}
