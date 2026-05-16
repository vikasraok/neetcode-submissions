class Solution {
    /**
     * @param {number[][]} triplets
     * @param {number[]} target
     * @return {boolean}
     */
    mergeTriplets(triplets, target) {
        let res = [0, 0, 0];
        const [x, y, z] = target;
        for (let [a, b, c] of triplets.filter(([a, b, c]) => {
            const [x, y, z] = target;
            return !(a > x || b > y || c > z);
        })) {
            res = [Math.max(res[0], a), Math.max(res[1], b), Math.max(res[2], c)];
            if (res[0] === x && res[1] === y && res[2] === z) return true;
        }
        return false;
    }
}
