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
        let inorderMap = new Map();
        inorder.forEach((val,index)=> inorderMap.set(val,index));
        let preIndex = 0;
        function arrayToTree(left,right){
            if(left>right) return null;
            let rootValue = preorder[preIndex++];
            let root = new TreeNode(rootValue);

            let mid = inorderMap.get(rootValue);
            root.left = arrayToTree(left, mid-1);
            root.right = arrayToTree(mid+1,right)
            return root
        }
        return arrayToTree(0, inorder.length -1)
    }
}
