class Solution {
    /**
     * @param {number[]} hand
     * @param {number} groupSize
     * @return {boolean}
     */
    isNStraightHand(hand, groupSize) {
        const n = hand.length;
        if (n % groupSize !== 0) return false;
        const freq = new Map();
        for (let h of hand) {
            freq.set(h, (freq.get(h) ?? 0) + 1);
        }
        for (let k of [...freq.keys()].sort((a, b) => a - b)) {
            if (freq.get(k) === 0) continue;
            const count = freq.get(k);
            for (let i = 0; i < groupSize; i++) {
                if (!freq.has(k + i) || freq.get(k + i) < count) return false;
                freq.set(k + i, freq.get(k + i) - count);
            }
        }
        return true;
    }
}
