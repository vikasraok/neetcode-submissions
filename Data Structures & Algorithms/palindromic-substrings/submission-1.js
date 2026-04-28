class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s) {
        if(!s || s.length ===0) return 0;
        const t= '#'+s.split("").join("#")+"#";
        const n = t.length
        const p = Array.from({length:n}).fill(0);
        let center=0, rightEdge=0;
        let total =0;
        for(let i=0; i<n; i++){
            const mirror = 2*center-i;
            if(i<rightEdge){
                p[i] = Math.min(rightEdge-i, p[mirror])
            }

            let rightCheck = i+(1+p[i]);
            let leftCheck = i-(1+p[i]);
            while(rightCheck <n && leftCheck >=0 && t[rightCheck]===t[leftCheck]){
                p[i]++;
                rightCheck++;
                leftCheck--;
            }

            if(i+p[i] > rightEdge){
                center=i;
                rightEdge= i+p[i]
            }
            total += Math.floor((p[i] + 1) / 2);
        }
        return total;
    }
}
