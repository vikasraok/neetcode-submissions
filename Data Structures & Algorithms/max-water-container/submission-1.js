class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maxVolume = 0;
        if(!heights?.length) return maxVolume;
        let left =0, right = heights.length -1;
        while(left<right){
            const height = Math.min(heights[right], heights[left])
            const width = right - left;
            maxVolume = Math.max(maxVolume, height*width);
            if(heights[left] < heights[right]){
                left++;
            }else{
                right--;
            }
        } 
        return maxVolume
    }
}
``