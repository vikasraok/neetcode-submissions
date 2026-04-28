/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        if(!node) return null // null check
        const clone = new Map();
        function dfs(curr){
            if(clone.has(curr)) return clone.get(curr);
            const copy = new Node(curr.val);
            clone.set(curr, copy);
            for(const n of curr.neighbors){
                copy.neighbors.push(dfs(n));
            }
            return copy;
        }
        return dfs(node);

    }
}
