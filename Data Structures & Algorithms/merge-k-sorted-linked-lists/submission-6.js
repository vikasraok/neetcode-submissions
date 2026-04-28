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
        if(lists.length === 0) return null;
        const heap = new MinPriorityQueue(node=> node.val);
        for(let node of lists){
            if(node) heap.enqueue(node);
        }
        const dummy = new ListNode(-1);
        let tail = dummy;

        while(!heap.isEmpty()){
            const minNode = heap.dequeue();
            tail.next = minNode;
            tail = tail.next;
            if(minNode.next) heap.enqueue(minNode.next)
        }
        return dummy.next
    }
}
