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
                dfs(node.left, min, node.val) &&
                dfs(node.right, node.val, max)
            );
        };
        return dfs(root, -Infinity, Infinity);
    }
}
