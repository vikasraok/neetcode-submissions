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
     * @return {void}
     */
    reorderList(head) {
        let half = head;
        let end = head;
        while (end && end.next) {
            half = half.next;
            end = end.next.next;
        }
        let prev = null;
        let curr = half;
        while (curr) {
            const next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        let l1 = head;
        let l2 = prev;

        while (l2.next) {
            const tmp1 = l1.next;
            const tmp2 = l2.next;
            l1.next = l2;
            l2.next = tmp1;
            l1 = tmp1;
            l2 = tmp2;
        }
    }
}
