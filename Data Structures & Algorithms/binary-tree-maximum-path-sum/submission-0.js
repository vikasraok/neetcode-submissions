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
    maxPathSum(root) {
        let maxSum = - Infinity;
        
        function dfs(node){
            if(!node) return 0;
            let leftGain = Math.max(dfs(node.left),0);
            let rightGain = Math.max(dfs(node.right),0);
            let currentPath = node.val + leftGain + rightGain;
            maxSum = Math.max(maxSum, currentPath);

            return node.val + Math.max(leftGain, rightGain);
        }
        dfs(root);
        return maxSum
    }
}
