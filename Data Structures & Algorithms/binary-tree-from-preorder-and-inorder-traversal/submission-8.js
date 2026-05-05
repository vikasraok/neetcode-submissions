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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) {
        const map = new Map();
        inorder.forEach((val, i) => map.set(val, i));
        const build = (preStart, preEnd, inStart, inEnd) => {
            if (preStart > preEnd) return null;
            const root = new TreeNode(preorder[preStart]);
            const mid = map.get(root.val);
            const leftSize = mid - inStart;
            root.left = build(preStart + 1, preStart + leftSize, inStart, mid - 1);
            root.right = build(preStart + leftSize + 1, preEnd, mid + 1, inEnd);
            return root;
        };
        return build(0, preorder.length - 1, 0, inorder.length - 1);
    }
}
