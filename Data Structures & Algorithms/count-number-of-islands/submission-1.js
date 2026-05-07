class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        const m = grid.length,
            n = grid[0].length;
        let count = 0;
        const directions = [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1],
        ];
        const dfs = (i, j) => {
            grid[i][j] = "0";
            for (let [dx, dy] of directions) {
                const nx = i + dx,
                    ny = j + dy;
                if (nx < 0 || ny < 0 || nx >= m || ny >= n) continue;
                if (grid[nx][ny] === "1") dfs(nx, ny);
            }
        };
        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                if (grid[i][j] === "1") {
                    count++;
                    dfs(i, j); //sink this and all connected islands
                }
            }
        }
        return count
    }
}
