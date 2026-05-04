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
        let k = 0;
        let curr = head;
        while (curr) {
            curr = curr.next;
            k++;
        }
        const dummy = new ListNode(0, head);
        curr = dummy;
        for (let i = 0; i < k - n; i++) curr = curr.next;
        curr.next = curr?.next?.next ?? null;
        return dummy.next;
    }
}
