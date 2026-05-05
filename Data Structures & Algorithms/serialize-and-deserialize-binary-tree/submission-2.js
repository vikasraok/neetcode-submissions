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

class Codec {
    /**
     * Encodes a tree to a single string.
     *
     * @param {TreeNode} root
     * @return {string}
     */
    serialize(root) {
        const res = [];
        const dfs = (node) => {
            if (!node) return res.push("#");
            res.push(node.val);
            dfs(node.left);
            dfs(node.right);
        };
        dfs(root);
        return res.join(",");
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data) {
        const arr = data.split(",");
        let head = 0;
        const dfs = (node) => {
            const val = arr[head++];
            if (val === "#") return null;
            node = new TreeNode(Number(val));
            node.left = dfs();
            node.right = dfs();
            return node;
        };
        return dfs();
    }
}
