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
    maxDepth(root) {
        if(!root) return 0;
        let queue = [root];
        let depth =0;
        while(queue.length){
            let size = queue.length;
            for(let i=0; i< size; i++){
                const node = queue.shift();
                if(node.left) queue.push(node.left)
                if(node.right) queue.push(node.right)
            }
            depth++
        }
        return depth
    }
}
