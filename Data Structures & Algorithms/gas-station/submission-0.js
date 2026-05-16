class Solution {
    /**
     * @param {number[]} gas
     * @param {number[]} cost
     * @return {number}
     */
    canCompleteCircuit(gas, cost) {
        let start = 0,
            tank = 0,
            total =0;
        for (let i = 0; i < gas.length; i++) {
            const diff = gas[i] - cost[i];
            total += diff;
            tank += diff;
            if (tank < 0) {
                tank = 0;
                start = i + 1;
            }
        }
        return total < 0 ? -1 : start;
    }
}
