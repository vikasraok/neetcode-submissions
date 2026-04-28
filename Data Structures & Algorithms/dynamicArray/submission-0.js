class DynamicArray {
    /**
     * @constructor
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity= capacity;
        this.size=0;
        this.arr = new Array(capacity);
    }

    /**
     * @param {number} i
     * @returns {number}
     */
    get(i) {
        return this.arr[i]
    }

    /**
     * @param {number} i
     * @param {number} n
     * @returns {void}
     */
    set(i, n) {
        this.arr[i] = n
    }

    /**
     * @param {number} n
     * @returns {void}
     */
    pushback(n) {
        if(this.size===this.capacity){
            this.resize();
        }
        this.arr[this.size]= n;
        this.size++;
    }

    /**
     * @returns {number}
     */
    popback() {
        if(this.size===0) return  null;
        const val = this.arr[this.size-1];
        this.size--;
        return val;
    }

    /**
     * @returns {void}
     */
    resize() {
        this.capacity *=2;
        const newArr = new Array(this.capacity);
        for(let i=0;i<this.size;i++){
            newArr[i] = this.arr[i];
        }
        this.arr = newArr;
    }

    /**
     * @returns {number}
     */
    getSize() {
        return this.size
    }

    /**
     * @returns {number}
     */
    getCapacity() {
         return this.capacity
    }
}
