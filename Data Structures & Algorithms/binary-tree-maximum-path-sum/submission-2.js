/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    maxPathSum(root) {
        let max = -Infinity;
        const dfs = (node) => {
            if (!node) return 0;
            let left = Math.max(dfs(node.left), 0);
            let right = Math.max(dfs(node.right), 0);
            max = Math.max(max, left + node.val + right);
            return node.val + Math.max(left, right);
        };
        dfs(root)
        return max;
    }
}
