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
        if(lists?.length === 0) return null;
        return this.divide(lists,0,lists.length-1)
    }

    divide (lists, l,r){
        if(l>r) return null;
        if(l===r) return lists[l];

        const mid = Math.floor(l+(r-l)/2);
        const left = this.divide(lists, l, mid);
        const right = this.divide(lists, mid+1,r);
        return this.merge(left, right)
    }

    merge(l1,l2){
        const dummy = new ListNode();
        let res = dummy;

        while(l1 && l2){
            if(l1.val < l2.val){
                res.next = l1;
                l1 = l1.next;
            }else{
                res.next=l2;
                l2= l2.next;
            }
            res = res.next;
        }
        res.next = l1 || l2;
        return dummy.next;
    }
}
