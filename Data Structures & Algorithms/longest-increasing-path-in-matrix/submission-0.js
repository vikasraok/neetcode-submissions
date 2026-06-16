class Solution {
    /**
     * @param {number[][]} matrix
     * @return {number}
     */
    longestIncreasingPath(matrix) {
         const m = matrix.length,
    n = matrix[0].length;
  let res = 0;
  const memo = new Map();
  const directions = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];
  const dfs = (r, c) => {
    if (memo.has(r * n + c)) return memo.get(r * n + c);

    let max = 0;
    for (let [dr, dc] of directions) {
      const nx = dr + r,
        ny = dc + c;
      if (nx < 0 || nx >= m || ny < 0 || ny >= n) continue;
      if (matrix[nx][ny] > matrix[r][c]) {
        max = Math.max(max, dfs(nx, ny));
      }
    }
    memo.set(r * n + c, 1 + max);
    return 1 + max;
  };
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      res = Math.max(res, dfs(i, j));
    }
  }
  return res;
    }
}
