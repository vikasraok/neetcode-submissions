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
     * @param {number} k
     * @return {ListNode}
     */
    reverseKGroup(head, k) {
        const dummy = new ListNode(0, head);
        const getKth = (node) => {
            let i = 0;
            while (i < k) {
                node = node?.next;
                if (!node) return null;
                i++;
            }
            return node;
        };
        const reverse = (first, last) => {
            const stop = last.next;
            let prev = null;
            let curr = first;
            while (curr !== stop) {
                const next = curr.next;
                curr.next = prev;
                prev = curr;
                curr = next;
            }
            return {
                newKth: prev,
                newTail: first,
            };
        };
        let prev = dummy;
        let curr = head;
        while (curr) {
            const kth = getKth(prev);
            if (!kth) break;
            const nextGroup = kth.next;
            const { newKth, newTail } = reverse(curr, kth);
            prev.next = newKth;
            newTail.next = nextGroup;
            prev = newTail;
            curr = nextGroup;
        }
        return dummy.next;
    }
}
