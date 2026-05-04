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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        let carry = 0;
        const dummy = new ListNode();
        let curr = dummy;
        while (l1 || l2) {
            const sum = (l1?.val ?? 0) + (l2?.val ?? 0) + carry;
            const node = new ListNode(sum % 10);
            carry = Math.floor(sum / 10);
            curr.next = node;
            curr = curr.next;
            l1 = l1?.next ?? null;
            l2 = l2?.next ?? null;
        }
        if (carry) curr.next = new ListNode(carry);
        return dummy.next;
    }
}
