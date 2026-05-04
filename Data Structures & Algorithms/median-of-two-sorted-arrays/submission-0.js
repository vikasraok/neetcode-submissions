class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        if (nums1.length > nums2.length) return this.findMedianSortedArrays(nums2, nums1);
        const m = nums1.length,
            n = nums2.length;
        let l = 0,
            r = m;
        const half = (m + n + 1) >> 1;
        let median = 0;
        while (l <= r) {
            const i = l + ((r - l) >> 1);
            const j = half - i;
            const l1 = i === 0 ? -Infinity : nums1[i - 1];
            const r1 = i === m ? Infinity : nums1[i];
            const l2 = j === 0 ? -Infinity : nums2[j - 1];
            const r2 = j === n ? Infinity : nums2[j];
            if (l1 > r2) r = i - 1;
            else if (l2 > r1) l = i + 1;
            else {
                const leftMax = Math.max(l1, l2);
                const rightMin = Math.min(r1, r2);
                return (m + n) % 2 === 1 ? leftMax : (leftMax + rightMin) / 2;
            }
        }
        return median;
    }
}
