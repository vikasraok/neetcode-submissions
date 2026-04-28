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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {
       const q1 = [p];
       const q2 =[q]

        while(q1.length && q2.length){
            const nodeP = q1.shift();
            const nodeQ = q2.shift();
        
            if (!nodeP && !nodeQ) continue;
            else if (nodeP?.val !== nodeQ?.val) return false;

            q1.push(nodeP.left)
            q1.push(nodeP.right)
            q2.push(nodeQ.left)
            q2.push(nodeQ.right);
        }
        return !q1.length && !q2.length;
    }
}
