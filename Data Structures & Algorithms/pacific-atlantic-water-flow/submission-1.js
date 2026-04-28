class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {
        if(!heights.length) return []
        const rows = heights.length;
        const cols = heights[0].length;

        const pSet = new Set();
        const aSet = new Set();

        const dfs =(r,c,set)=>{
            const key = `${r},${c}`;
            if(r<0 || c<0 || r>=rows || c>=cols) return;
            if(set.has(key)) return;
            set.add(key);
            const directions = [[1,0],[-1,0],[0,1],[0,-1]];
            for (let [dr, dc] of directions) {
                const nr = r + dr, nc = c + dc;
                if (nr >= 0 && nc >= 0 && nr < rows && nc < cols &&
                    heights[nr][nc] >= heights[r][c]) {
                    dfs(nr, nc, set);
                }
            }
        }
         for (let c = 0; c < cols; c++){
            dfs(0,c,pSet);
        }
        for (let r = 0; r < rows; r++){
            dfs(r,0,pSet);
        }
         for (let c = 0; c < cols; c++){
            dfs(rows-1,c,aSet)
        }
        for (let r = 0; r < rows; r++){
            dfs(r,cols-1,aSet)
        }


        const result = [];
    for (let cell of pSet) {
        if (aSet.has(cell)) {
            result.push(cell.split(',').map(Number));
        }
    }
    return result;
    }
}
