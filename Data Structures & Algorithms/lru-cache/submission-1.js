/* 
  Map: key → node          (O(1) lookup)
  DLL: head ↔ ... ↔ tail   (order = recency)
       MRU            LRU

  - get: lookup in map, move node to head → O(1)
  - put: lookup in map, update or insert at head, evict tail if over capacity → O(1)
  - Use dummy head and tail nodes to avoid edge cases on insert/remove

  Two helper methods you'll need:
  - remove(node) — detach a node from anywhere in the list
  - insertFront(node) — add a node right after dummy head

 */
class Node {
    constructor(key, val = 0, next = null, prev = null) {
        this.key = key;
        this.val = val;
        this.next = next;
        this.prev = prev;
    }
}
class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity;
        this.size = 0;
        this.map = new Map();
        this.head = new Node();
        this.tail = new Node();
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }
    remove(node) {
        node.prev.next = node.next;
        node.next.prev = node.prev;
    }
    insertFront(node) {
        node.next = this.head.next;
        node.prev = this.head;
        this.head.next.prev = node;
        this.head.next = node;
    }
    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if (!this.map.has(key)) return -1;
        const node = this.map.get(key);
        this.remove(node);
        this.insertFront(node);
        return node.val;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if (this.map.has(key)) {
            const node = this.map.get(key);
            node.val = value;
            this.remove(node);
            this.insertFront(node);
        } else {
            const node = new Node(key, value);
            this.insertFront(node);
            this.map.set(key, node);
            this.size++;
        }
        if (this.size > this.capacity) {
            const node = this.tail.prev;
            this.remove(node);
            this.map.delete(node.key);
            this.size--;
        }
    }
}
