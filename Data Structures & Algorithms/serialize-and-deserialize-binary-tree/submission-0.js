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
        let result =[];
        function dfs(node){
            if(!node){
                return result.push("N");
            }
            result.push(node.val);
            dfs(node.left);
            dfs(node.right);
        }
        dfs(root);
        return result.join(",")
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data) {
        let values = data.split(",");
        let index=0;
        function dfs(){
            if(values[index] === "N"){
                index++;
                return null;
            }
            let node = new TreeNode(parseInt(values[index++]));
            node.left= dfs();
            node.right = dfs();
            return node;
        }
        return dfs()
    }
}
