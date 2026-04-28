class MedianFinder {
    constructor() {
        this.minHeap = new MinPriorityQueue();
        this.maxHeap = new MaxPriorityQueue();
    }
    addNum(num) {
        if(this.maxHeap.isEmpty() || num <= this.maxHeap.front()){
            this.maxHeap.enqueue(num);
        }else {
            this.minHeap.enqueue(num);
        }
        if(this.minHeap.size() > this.maxHeap.size()+1){
            this.maxHeap.enqueue(this.minHeap.dequeue());
        } else if(this.maxHeap.size()>this.minHeap.size()+1){
            this.minHeap.enqueue(this.maxHeap.dequeue());
        }
    }
    findMedian() {
        if(this.minHeap.size() > this.maxHeap.size()){
            return this.minHeap.front();
        }else if(this.maxHeap.size()> this.minHeap.size()){
            return this.maxHeap.front();
        }else{
            return (this.minHeap.front()+this.maxHeap.front())/2.0
        }
    }
}
