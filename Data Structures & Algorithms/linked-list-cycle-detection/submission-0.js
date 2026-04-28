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
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head) {
        const seen = new Set();
        while(head){
            if(seen.has(head)) return true;
            seen.add(head);
            head = head.next;
        }
        return false
    }
}
