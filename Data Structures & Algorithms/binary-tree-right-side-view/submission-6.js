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
     * @return {number[]}
     */
    rightSideView(root) {
        if (!root) return [];
        let queue = [root];
        let res = [];
        while (queue.length) {
            const size = queue.length;
            let next = [];
            for (let i = 0; i < size; i++) {
                const node = queue[i];
                if (node.left) next.push(node.left);
                if (node.right) next.push(node.right);
            }
            res.push(queue[size - 1].val);
            queue = next;
        }
        return res;
    }
}
