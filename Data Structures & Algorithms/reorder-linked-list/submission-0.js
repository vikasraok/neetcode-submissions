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
        let slow = head;
        let fast = head;
        while(fast && fast.next){
            slow= slow.next;
            fast=fast.next.next;
        }
        let prev = null;
        let current = slow.next;
        slow.next=null;
        while(current){
            let next = current.next;
            current.next = prev;
            prev =current;
            current = next;
        }
        let p1=head, p2=prev;
        while(p2){
            let tmp1 = p1.next;
            let tmp2 = p2.next;
            p1.next= p2;
            p2.next= tmp1;
            p1= tmp1;
            p2 = tmp2;
        }
    }
}
