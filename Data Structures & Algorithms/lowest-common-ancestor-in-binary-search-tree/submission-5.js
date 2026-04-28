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
        while(current){
            if(Math.max(p.val,q.val) < current.val){
                current = current.left
            }else if(Math.min(p.val,q.val)> current.val){
                current= current.right
            }else return current;
        }
        return null
    }
}
