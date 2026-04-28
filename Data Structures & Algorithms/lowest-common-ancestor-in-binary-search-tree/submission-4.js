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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    lowestCommonAncestor(root, p, q) {
  let current = root;
  const small = Math.min(p.val, q.val);
  const large = Math.max(p.val, q.val);

  while (current) {
    if (large < current.val) {
      current = current.left;     // both are in left subtree
    } else if (small > current.val) {
      current = current.right;    // both are in right subtree
    } else {
      return current;             // split point or one equals current
    }
  }
  return null;
    }
}
