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
        if (!root) return [];
        const queue = [root];
        let head = 0;
        const res = [];
        while (queue.length > head) {
            const size = queue.length;
            const arr = [];
            for (let i = head; i < size; i++) {
                const node = queue[i];
                arr.push(node.val);
                if (node.left) queue.push(node.left);
                if (node.right) queue.push(node.right);
            }
            res.push(arr);
            head = size;
        }
        return res;
    }
}
