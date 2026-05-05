/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Heap {
    constructor(comparator = (a, b) => a - b) {
        this.heap = [];
        this.comparator = comparator;
    }
    push(node) {
        this.heap.push(node);
        this._bubbleUp(this.heap.length - 1);
    }
    pop() {
        const top = this.heap[0];
        const last = this.heap.pop();
        if (this.heap.length) {
            this.heap[0] = last;
            this._bubbleDown(0);
        }
        return top;
    }
    size() {
        return this.heap.length;
    }
    peek() {
        return this.heap[0];
    }
    _bubbleUp(i) {
        const parent = (i - 1) >> 1;
        if (i > 0 && this.comparator(this.heap[parent], this.heap[i]) > 0) {
            [this.heap[parent], this.heap[i]] = [this.heap[i], this.heap[parent]];
            this._bubbleUp(parent);
        }
    }
    _bubbleDown(i) {
        let smallest = i;
        const left = 2 * i + 1;
        const right = 2 * i + 2;
        if (left < this.size() && this.comparator(this.heap[left], this.heap[smallest]) < 0)
            smallest = left;
        if (right < this.size() && this.comparator(this.heap[right], this.heap[smallest]) < 0)
            smallest = right;
        if (smallest !== i) {
            [this.heap[smallest], this.heap[i]] = [this.heap[i], this.heap[smallest]];
            this._bubbleDown(smallest);
        }
    }
}
class Solution {
    /**
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        const minHeap = new Heap((a, b) => a.val - b.val);
        for (let list of lists) {
            minHeap.push(list);
        }
        const dummy = new ListNode();
        let curr = dummy;
        while (minHeap.size()) {
            const node = minHeap.pop();
            curr.next = new ListNode(node.val);
            if (node.next) minHeap.push(node.next);
            curr = curr.next;
        }
        return dummy.next;
    }
}
