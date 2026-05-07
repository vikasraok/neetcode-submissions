class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        const m = grid.length,
            n = grid[0].length;
        let max = 0;
        const directions = [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1],
        ];
        const dfs = (i, j) => {
            grid[i][j] = 0;
            let area = 1;
            for (let [dx, dy] of directions) {
                const nx = i + dx,
                    ny = j + dy;
                if (nx < 0 || ny < 0 || nx >= m || ny >= n) continue;
                if (grid[nx][ny] === 1) area += dfs(nx, ny);
            }
            return area;
        };
        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                if (grid[i][j] === 1) {
                    max = Math.max(dfs(i, j, 1), max); //sink this and all connected islands
                }
            }
        }
        return max;
    }
}
