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
     * @return {ListNode}
     */

    reverseList(head) {
            let prev = null;
            let current = head; // 0->1
            while(current){
                let next = current.next; // 1->2
                current.next = prev //null
                prev = current //0->null
                current = next
            }
            return prev
    }
}
