class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const cars = position.map((p, i) => [p, speed[i]]);
        cars.sort((a, b) => b[0] - a[0]);
        const arrivalTimes = cars.map(([p, s]) => {
            return Number((target - p) / s);
        });
        let fleet = cars.length;
        for (let i = 1; i < arrivalTimes.length; i++) {
            if (arrivalTimes[i] <= arrivalTimes[i - 1]) {
                fleet--;
                arrivalTimes[i] = arrivalTimes[i - 1];
            }
        }
        return fleet;
    }
}
