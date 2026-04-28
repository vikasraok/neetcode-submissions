class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (nums.length === 1) return 1;
        let hash = new Set(nums);
        let longest = 0;
        for (let num of hash) {
            if (!hash.has(num - 1)) {
                let l = 1;
                while (hash.has(num + l)) l++;
                longest = Math.max(longest, l);
            }
        }
        return longest;
    }
}
