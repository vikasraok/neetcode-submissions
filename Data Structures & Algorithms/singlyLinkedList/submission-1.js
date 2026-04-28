class Node {
    constructor(item){
        this.val = item;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index) {
        let temp =0;
        let curr = this.head
        while(curr !== null){
            if(temp === index) return curr.val;
            curr = curr.next;
            temp++;
        }
        return -1;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertHead(val) {
        const temp = new Node(val);
        temp.next= this.head;
        this.head = temp;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertTail(val) {
        const temp = new Node(val);
        if (this.head === null) {
             this.head = temp; return; 
        }
        let curr = this.head;
        while(curr.next !== null){
            curr = curr.next;
        }
        curr.next= temp;
    }

    /**
     * @param {number} index
     * @return {boolean}
     */
    remove(index) {
        if(this.head === null) return false;

        if(index===0){
            this.head = this.head.next;
            return true;
        }
        let curr = this.head;
        let temp=0;
        while(curr.next !=null){
            if(temp+1 === index){
                curr.next = curr.next.next;
                return true;
            }
            curr = curr.next;
            temp++;
        }
        return false;
    }

    /**
     * @return {number[]}
     */
    getValues() {
        let curr =  this.head;
        const temp = new Array();
        while(curr !== null){
            temp.push(curr.val)
            curr = curr.next;
        }
        return temp;
    }
}
