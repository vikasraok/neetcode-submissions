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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        let current = root;
        while(current){
            if(!current.left){
                k--;
                if(k===0) return current.val
                current = current.right;
            }else{
                let pred = current.left;
                while (pred.right && pred.right !== current) pred = pred.right;
                if(!pred.right){
                    pred.right = current;
                    current = current.left;
                }else{
                    pred.right = null;
                    k--;
                    if(k===0) return current.val
                    current = current.right
                }
            }
        }
        return null
    }
}
