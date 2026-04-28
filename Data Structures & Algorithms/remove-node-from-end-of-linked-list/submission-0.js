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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let dummy = new ListNode(0,head);
        let first = dummy;
        let second  = dummy;
        let step =0;
        while(first){
            first = first.next;
            step++;
            if(step > n+1){
                second = second.next
            }
        }
         second.next = second.next.next;

        return dummy.next;
    }
}
