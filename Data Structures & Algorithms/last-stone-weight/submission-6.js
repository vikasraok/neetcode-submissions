class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        const maxStone = Math.max(...stones);
        const freq = new Array(maxStone +1).fill(0);
        for (const stone of stones){
            freq[stone]++;
        }
        for(let w=maxStone; w>0;){
            // if(freq[w] ===0){
            //     w--;
            //     continue;
            // }
            if(freq[w] %2 ===0){
                freq[w] =0;
                w--;
            }else{
                let next = w-1;
                while(next && freq[next] === 0) next--;
                if(next ===0) return w;
                freq[w]--;
                freq[next]--;
                const leftover = w-next;
                freq[leftover]++;
                w=Math.max(next,leftover);
            }
        }
        return 0;   
    }
}
