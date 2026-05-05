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
        let queue = [root];
        const res = [];
        while (queue.length) {
            const size = queue.length;
            let next = [];
            const arr = [];
            for (let i = 0; i < size; i++) {
                const node = queue[i];
                arr.push(node.val);
                if (node.left) next.push(node.left);
                if (node.right) next.push(node.right);
            }
            res.push(arr);
            queue = next;
        }
        return res;
    }
}
