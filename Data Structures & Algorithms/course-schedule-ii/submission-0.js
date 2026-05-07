class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses, prerequisites) {
        const indegree = Array(numCourses).fill(0);
        const adj = {};
        for (let [course, preq] of prerequisites) {
            if (!adj[preq]) adj[preq] = [];
            adj[preq].push(course);
            indegree[course]++;
        }
        const res = [];
        let queue =[]
        indegree.forEach((val, i) => { if (val === 0) queue.push(i); });
        while (queue.length) {
            const size = queue.length;
            const next = [];
            for (let i = 0; i < size; i++) {
                const course = queue[i];
                res.push(course);
                if (adj[course]) {
                    for (let nei of adj[course]) {
                        indegree[nei]--;
                        if (indegree[nei] === 0) next.push(nei);
                    }
                }
            }
            numCourses -= size;
            queue = next;
        }
        return numCourses === 0 ? res : [];
    }
}
