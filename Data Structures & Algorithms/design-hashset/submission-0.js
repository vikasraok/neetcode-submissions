class MyHashSet {
    constructor() {
        this.set ={}
    }

    /**
     * @param {number} key
     * @return {void}
     */
    add(key) {
       this.set[key] = true
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        delete this.set[key]
    }

    /**
     * @param {number} key
     * @return {boolean}
     */
    contains(key) {
        return !!this.set[key]
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
