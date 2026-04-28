class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */


    findKthLargest(nums, k) {
        function median(left,right){
            const mid = (left+right) >> 1
            const a = nums[left], b=nums[mid],c=nums[right];
            if((a<=b&&b<=c) || (c<=b&&b<=a)) return mid;
            if((b<=a&&a<=c) || (c<=a&&a<=b)) return left;
            return right;
        }
        function partition(left,right){
            const p = median(left,right);
            const pivot = nums[p];
            [nums[left],nums[p]]= [nums[p],nums[left]];
            let i=left-1;
            let j=right+1;

            while(true){
                do { i++; } while (nums[i] > pivot);   // descending order
                do { j--; } while (nums[j] < pivot);
                if(i>=j)return j;
                [nums[i],nums[j]]= [nums[j],nums[i]]
            }
        }
        let left=0,right=nums.length-1;
        const target =k-1;
        while(left<=right){
            const p= partition(left,right);
            if(target<=p) right=p;
            else left= p+1;
            if(left===right) return nums[left];
        }
    }
}
