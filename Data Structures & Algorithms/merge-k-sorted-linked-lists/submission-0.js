/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        let nodes =[];
        
        for(let l of lists){
            while(l){
                nodes.push(l.val);
                l = l.next;
            }
        }
        nodes.sort((a,b)=>a-b);
        let dummy = new ListNode(0);
        let cur = dummy;
        for(let node of nodes){
            cur.next = new ListNode(node);
            cur = cur.next;
        }
        return dummy.next
    }
}
