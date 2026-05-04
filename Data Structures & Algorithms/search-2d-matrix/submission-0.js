class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        const m = matrix.length,
            n = matrix[0].length;
        let l = 0,
            r = m * n - 1;
        while (l <= r) {
            const mid = l + ((r - l) >> 1);
            const row = Math.floor(mid / n);
            const col = mid % n;
            if (matrix[row][col] === target) return true;
            else if (matrix[row][col] < target) l = mid + 1;
            else r = mid - 1;
        }
        return false
    }
}
