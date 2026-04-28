class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        const sqrt = Math.sqrt(5);
        const phi = (1+ sqrt)/2;
        const psi = (1 - sqrt)/2;
        return Math.round((Math.pow(phi,n+1) - Math.pow(psi,n+1))/sqrt)
    }
}
