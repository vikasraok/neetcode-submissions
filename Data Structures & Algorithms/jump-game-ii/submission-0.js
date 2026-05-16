class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    /*  - jumps — count
  - currentEnd — the boundary of your current jump (where this level ends)
  - farthest — the furthest you can reach from any index in the current window */
    jump(nums) {
        let jumps = 0;
        let currentIndex = 0,
            farthest = 0;
        for (let i = 0; i < nums.length -1; i++) {
            farthest = Math.max(i + nums[i], farthest);
            if (i === currentIndex) {
                jumps++;
                currentIndex = farthest;
            }
        }
        return jumps;
    }
}
