class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let set = new Set(nums);
        let result = 0;
        for (let num of nums) {
            if (!set.has(num - 1)) {
                let l = 1;
                while (set.has(num + l)) l++;
                result = Math.max(result, l);
            }
        }
        return result
    }
}
