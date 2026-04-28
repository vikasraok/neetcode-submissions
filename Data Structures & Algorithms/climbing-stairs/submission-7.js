class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        if (n <= 2) {
            return n;
        }
        const multiply =(a,b)=>{
            let result = [[0,0],[0,0]];
            result[0][0] = a[0][0]*b[0][0] + a[0][1]*b[1][0]
            result[0][1] = a[0][0]*b[0][1] + a[0][1]*b[1][1]
            result[1][0] = a[1][0]*b[0][0] + a[1][1]*b[1][0]
            result[1][1] = a[1][0]*b[0][1] + a[1][1]*b[1][1];
            return result
        }
        const power = (t,n)=>{
            if(n===1) return t;
            if(n%2===0){
                const half = power(t,n/2);
                return multiply(half,half);
            }
            else return multiply(t,power(t,n-1))
        }
        const t = [[1,1],[1,0]];
        const result = power(t,n-2);
        return result[0][0]*2+ result[0][1]*1
    }
}
