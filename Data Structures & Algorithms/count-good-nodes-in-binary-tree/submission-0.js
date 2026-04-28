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
        if(!root) return 0;
        let count =0
        let stack =[[root, root.val]];
        while(stack.length > 0){
            let [node, maxSoFar] = stack.pop();
            if(node.val >= maxSoFar){
                count++;
            }
        let newMax = Math.max(maxSoFar, node.val);
        if (node.left) stack.push([node.left, newMax]);
        if (node.right) stack.push([node.right, newMax]);
        }
        return count
    }
}
