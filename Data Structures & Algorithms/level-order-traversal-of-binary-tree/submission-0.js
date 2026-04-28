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
     * @return {number[][]}
     */
    levelOrder(root) {
        let result = [];
         if (!root) return result;
        let queue = [root]

        while(queue.length > 0){
            let levelSize = queue.length; 
            let level = [];
            for(let i=0; i< levelSize;i++){
                let node = queue.shift();
                level.push(node.val);
                if(node.left) queue.push(node.left);
                if(node.right) queue.push(node.right);
            }
            result.push(level)
        }
        return result

    }
}
