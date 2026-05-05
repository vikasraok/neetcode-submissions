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
     * @return {boolean}
     */
    isValidBST(root) {
        if (!root) return true;
        const dfs = (node, min, max) => {
            if (!node) return true;
            if (node.val >= max || node.val <= min) return false;
            return (
                dfs(node.left, Math.min(min, node.val), node.val) &&
                dfs(node.right, node.val, Math.max(max, node.val))
            );
        };
        return dfs(root, -Infinity, Infinity);
    }
}
