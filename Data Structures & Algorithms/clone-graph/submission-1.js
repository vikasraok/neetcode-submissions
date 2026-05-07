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
        if (!node) return null;
        const map = new Map();
        const dfs = (node) => {
            if (!node) return null;
            if (map.has(node)) return map.get(node);
            const clone = new Node(node.val);
            map.set(node, clone);
            for (let nei of node?.neighbors) {
                if (nei) clone.neighbors.push(dfs(nei));
            }
            return clone;
        };
        dfs(node);
        return map.get(node);
    }
}
