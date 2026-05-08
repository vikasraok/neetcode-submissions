class Solution {
    /**
     * @param {string[][]} tickets
     * @return {string[]}
     */
    findItinerary(tickets) {
        const adj = {};
        for (let [s, d] of tickets) {
            if (!adj[s]) adj[s] = [];
            adj[s].push(d);
        }
        for (let key of Object.keys(adj)) {
            adj[key].sort().reverse();
        }
        const stack = ["JFK"];
        const res = [];
        while (stack.length) {
            const top = stack.at(-1);
            if (adj[top]?.length) {
                stack.push(adj[top].pop());
            } else res.push(stack.pop());
        }
        return res.reverse();
    }
}
