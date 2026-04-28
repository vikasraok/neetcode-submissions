class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */


    findKthLargest(nums, k) {
        const n = nums.length;
        let L=0, R=n-1;
        const target= n-k;
        if(k<=0) return -1;
        function partition(l,r){
            const pivot = nums[r];
            let i=l;
            for(let j=l;j<r;j++){
                if(nums[j]<=pivot){
                    [nums[i],nums[j]]=[nums[j],nums[i]];
                    i++;
                }
            }
            [nums[i],nums[r]]=[nums[r],nums[i]];
            return i;
        }
        while(L<=R){
            const pivot = partition(L, R);
            if(pivot === target) return nums[pivot];
            else if(pivot<target) L=pivot+1;
            else R=pivot-1;
        }
    }
}
