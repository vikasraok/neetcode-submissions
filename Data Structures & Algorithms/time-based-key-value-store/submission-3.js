class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if (!this.keyStore.has(key)) this.keyStore.set(key, [[timestamp, value]]);
        else this.keyStore.get(key).push([timestamp, value]);
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        if (!this.keyStore.has(key)) return "";
        else {
            const store = this.keyStore.get(key);
            let l = 0,
                r = store.length - 1;
            let res = "";
            while (l <= r) {
                const mid = l + ((r - l) >> 1);
                const [t, v] = store[mid];
                if (t <= timestamp) {
                    res = v;
                    l = mid + 1;
                } else r = mid - 1;
            }
            return res;
        }
    }
}
