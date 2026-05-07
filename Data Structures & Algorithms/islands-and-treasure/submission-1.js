class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
        const INF = 2147483647;
        let queue = [];
        const m = grid.length,
            n = grid[0].length;
        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                if (grid[i][j] === 0) {
                    queue.push([i, j]);
                }
            }
        }
        const directions = [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1],
        ];
        let level = 1;
        while (queue.length) {
            const size = queue.length;
            let next = [];
            for (let i = 0; i < size; i++) {
                const [x, y] = queue[i];
                for (let [dx, dy] of directions) {
                    const nx = x + dx,
                        ny = y + dy;
                    if (nx < 0 || ny < 0 || nx >= m || ny >= n) continue;
                    if (grid[nx][ny] === INF) {
                        grid[nx][ny] = level;
                        next.push([nx, ny]);
                    }
                }
            }
            level++;
            queue = [...next];
        }

    }
}
