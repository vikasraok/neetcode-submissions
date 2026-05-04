class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        const canEat = (rate) => {
            let time = 0;
            piles.forEach((pile) => {
                time += Math.ceil(pile / rate);
                return pile
            });
            return time <= h;
        };
        let l = 1,
            r = Math.max(...piles);
        while (l < r) {
            const mid = l + ((r - l) >> 1);
            if (canEat(mid)) r = mid;
            else l = mid + 1;
        }
        return l;
    }
}
