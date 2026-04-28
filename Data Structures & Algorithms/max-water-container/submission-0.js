class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maxVolume = 0;
        for(let i=0; i< heights.length; i++){
            const height = heights[i];
            for (let j=i+1; j< heights.length; j++){
                let volume = 0
                const width = j-i;
                if(height <= heights[j]){
                    volume = height * width;
                }else {
                    volume = heights[j] * width;
                }
                if( volume > maxVolume) maxVolume = volume
            }
        }
        return maxVolume
    }
}
``