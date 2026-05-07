class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        const indegree = Array(numCourses).fill(0);
        const adj = {};
        for (let [course, preq] of prerequisites) {
            if (!adj[preq]) adj[preq] = [];
            adj[preq].push(course);
            indegree[course]++;
        }
        let queue = [];
        indegree.forEach((val, i) => {
            if (val === 0) {
                queue.push(i);
                numCourses--;
            }
        });
        while (queue.length) {
            const size = queue.length;
            let next = [];
            for (let i = 0; i < size; i++) {
                const course = queue[i];
                if (adj[course]) {
                    for (let nei of adj[course]) {
                        indegree[nei]--;
                        if (indegree[nei] === 0) next.push(nei);
                    }
                }
            }
            numCourses -= next.length;
            queue = [...next];
        }
        return numCourses === 0;
    }
}
