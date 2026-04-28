class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        function binarySearch(left, right){
             if (left > right) return -1;

            const mid = Math.floor((left+right)/2);
            if(nums[mid] === target) return mid;

            if(nums[left] <= nums[mid]){
                if(nums[left]<= target && target < nums[mid]){
                    return binarySearch(left, mid-1);
                }else {
                    return binarySearch(mid+1, right)
                }
            } else {
                if(nums[mid] < target && target <=nums[right]){
                    return binarySearch(mid +1, right)
                }else {
                    return binarySearch(left, mid-1)
                }
            }
        }
        return binarySearch(0,nums.length -1)
    }
}
