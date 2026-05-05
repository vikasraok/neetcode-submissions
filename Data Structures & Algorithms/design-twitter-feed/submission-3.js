class Twitter {
    maxHeap = (comparator = (a, b) => b - a) => {
        const heap = [];
        const _bubbleUp = (i) => {
            while (i > 0) {
                const parent = (i - 1) >> 1;
                if (comparator(heap[parent], heap[i]) < 0) break;
                [heap[parent], heap[i]] = [heap[i], heap[parent]];
                i = parent;
            }
        };
        const _bubbleDown = (i) => {
            while (true) {
                let temp = i;
                const l = 2 * i + 1,
                    r = 2 * i + 2;
                if (l < heap.length && comparator(heap[l], heap[temp]) < 0) temp = l;
                if (r < heap.length && comparator(heap[r], heap[temp]) < 0) temp = r;
                if (temp === i) break;
                [heap[temp], heap[i]] = [heap[i], heap[temp]];
                i = temp;
            }
        };
        return {
            push: (val) => {
                heap.push(val);
                _bubbleUp(heap.length - 1);
            },
            pop: () => {
                const top = heap[0];
                const last = heap.pop();
                if (heap.length) {
                    heap[0] = last;
                    _bubbleDown(0);
                }
                return top;
            },
            size: () => heap.length,
            peek: () => heap[0],
        };
    };
    constructor() {
        this.follows = new Map();
        this.tweets = new Map();
        this.ts = 0;
    }

    /**
     * @param {number} userId
     * @param {number} tweetId
     * @return {void}
     */
    postTweet(userId, tweetId) {
        if (!this.follows.has(userId)) this.follows.set(userId, new Set([userId]));
        if (!this.tweets.has(userId)) this.tweets.set(userId, []);
        this.tweets.get(userId).push([tweetId, this.ts++]);
    }

    /**
     * @param {number} userId
     * @return {number[]}
     */
    getNewsFeed(userId) {
        if (!this.follows.has(userId)) return [];
        const followers = this.follows.get(userId).values();
        const heap = this.maxHeap((a, b) => b[1] - a[1]);
        for (let follower of followers) {
            const tweets = this.tweets.get(follower) || [];
            for (let tweet of tweets) {
                heap.push(tweet);
            }
        }
        let res = [];
        while (res.length < 10 && heap.size()) res.push(heap.pop()[0]);
        return res;
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    follow(followerId, followeeId) {
        if (!this.follows.has(followerId)) this.follows.set(followerId, new Set([followerId]));
        this.follows.get(followerId).add(followeeId);
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    unfollow(followerId, followeeId) {
        if (followerId === followeeId) return;
        this.follows.get(followerId).delete(followeeId);
    }
}
