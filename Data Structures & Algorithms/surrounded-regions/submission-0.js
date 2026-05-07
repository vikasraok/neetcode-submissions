class Solution {
    /**
     * @param {character[][]} board
     * @return {void} Do not return anything, modify board in-place instead.
     */
    solve(board) {
        const m = board.length,
            n = board[0].length;
        let queue = [];
        for (let i = 0; i < m; i++) {
            if (board[i][0] === "O") queue.push([i, 0]);
            if (board[i][n - 1] === "O") queue.push([i, n - 1]);
        }
        for (let i = 0; i < n; i++) {
            if (board[0][i] === "O") queue.push([0, i]);
            if (board[m - 1][i] === "O") queue.push([m - 1, i]);
        }
        const safe = new Set(queue.map(([r, c]) => r + "_" + c));
        const directions = [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1],
        ];
        while (queue.length) {
            const size = queue.length;
            const next = [];
            for (let i = 0; i < size; i++) {
                const [x, y] = queue[i];
                for (let [dx, dy] of directions) {
                    const nx = x + dx,
                        ny = y + dy;
                    if (nx < 0 || ny < 0 || nx >= m || ny >= n) continue;
                    if (safe.has(nx + "_" + ny)) continue;
                    if (board[nx][ny] === "O") {
                        safe.add(nx + "_" + ny);
                        next.push([nx, ny]);
                    }
                }
            }
            queue = [...next];
        }
        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                if (safe.has(i + "_" + j)) continue;
                else board[i][j] = "X";
            }
        }
    }
}
