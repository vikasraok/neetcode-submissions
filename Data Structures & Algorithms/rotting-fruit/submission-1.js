class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        let queue = [];
        const m = grid.length,
            n = grid[0].length;
        let fresh = 0;
        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                if (grid[i][j] === 2) {
                    queue.push([i, j]);
                    grid[i][j] = 0;
                }
                if (grid[i][j] === 1) fresh++;
            }
        }
        const directions = [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1],
        ];
        let cycle = 0;
        while (queue.length) {
            const size = queue.length;
            const next = [];
            for (let i = 0; i < size; i++) {
                const [x, y] = queue[i];
                for (let [dx, dy] of directions) {
                    const nx = x + dx,
                        ny = y + dy;
                    if (nx < 0 || ny < 0 || nx >= m || ny >= n) continue;
                    if (grid[nx][ny] > 0) {
                        grid[nx][ny] = 0;
                        fresh--;
                        next.push([nx, ny]);
                    }
                }
            }
            if (next.length) cycle++;
            queue = [...next];
        }
        return fresh > 0 ? -1 : cycle;
    }
}
