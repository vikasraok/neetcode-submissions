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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    serialise(root){
        if(!root) return '#';
        return `^${root.val}${this.serialise(root.left)}${this.serialise(root.right)}`
    }
    zFunction(s){
        const z = new Array(s.length).fill(0);
        let l=0, r=0, n = s.length;
        for(let i=1; i< n; i++){
            if(i<=r){
                z[i]= Math.min(r-i, z[i-l])
            }
            while (i+z[i] < n && s[z[i]] === s[i+ z[i]]) z[i]++;
            if(i+z[i] > r) l=i, r=i+z[i]
        }
        return z
    }
    isSubtree(root, subRoot) {
        const sRoot = this.serialise(root);
        const sSub = this.serialise(subRoot);
        const combined = sSub + '|' + sRoot;
        const z = this.zFunction(combined);
        return z.some(val => val === sSub.length);
    }
}
