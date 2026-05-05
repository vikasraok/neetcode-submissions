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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        const isSame = (p, q) => {
            if (!p && !q) return true;
            if (!p || !q) return false;
            if (p.val !== q.val) return false;
            return isSame(p.left, q.left) && isSame(p.right, q.right);
        };
        const stack = [root];

        while (stack.length) {
            const node = stack.pop();
            if (node.val === subRoot.val && isSame(node, subRoot)) return true;
            if (node.left) stack.push(node.left);
            if (node.right) stack.push(node.right);
        }
        return false;
    }
}
