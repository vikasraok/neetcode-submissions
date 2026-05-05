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
    goodNodes(root) {
        if (!root) return 0;
        let counter = 0;
        const dfs = (node, maxVal) => {
            if (node.left) dfs(node.left, Math.max(node.val, maxVal));
            if (node.right) dfs(node.right, Math.max(node.val, maxVal));
            if (node.val >= maxVal) counter++;
        };
        dfs(root, -Infinity);
        return counter;
    }
}
