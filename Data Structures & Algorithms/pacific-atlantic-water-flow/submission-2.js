class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {
        const m = heights.length,
            n = heights[0].length;
        const directions = [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1],
        ];
        const bfs = (start) => {
            const visited = new Set(start.map(([r, c]) => r + "_" + c));
            let queue = [...start];
            while (queue.length) {
                const size = queue.length;
                const next = [];
                for (let i = 0; i < size; i++) {
                    const [x, y] = queue[i];
                    for (let [dx, dy] of directions) {
                        const nx = dx + x,
                            ny = dy + y;
                        if (nx < 0 || ny < 0 || nx >= m || ny >= n) continue;
                        if (visited.has(nx + "_" + ny)) continue;
                        if (heights[nx][ny] < heights[x][y]) continue;
                        visited.add(nx + "_" + ny);
                        next.push([nx, ny]);
                    }
                }
                queue = [...next];
            }
            return visited;
        };
        const p = [],
            a = [];
        for (let r = 0; r < m; r++) {
            p.push([r, 0]);
            a.push([r, n - 1]);
        }
        for (let c = 0; c < n; c++) {
            p.push([0, c]);
            a.push([m - 1, c]);
        }
        const pSet = bfs(p);
        const aSet = bfs(a);
        const res = [];
        for (let coordinate of pSet.values()) {
            if (aSet.has(coordinate)) res.push(coordinate.split("_").map(Number));
        }
        return res;
    }
}
