class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        let indegree = Array(numCourses).fill(0);
        const graph = new Map();
           for (let i = 0; i < numCourses; i++) {
        graph.set(i, []);
    }
        for(const [a,b] of prerequisites){
            indegree[a]++;
            graph.get(b).push(a);
        }
        let q = [];
        for (let i=0;i< numCourses;i++){
            if(indegree[i]===0){
                q.push(i);
            }
        }
        let finish =0;
        while(q.length){
            let node = q.shift();
            finish++;
            for (let n of graph.get(node)){
                indegree[n]--;
                if(indegree[n] === 0){
                    q.push(n)
                }
            }
        }

        return finish === numCourses
    }
}
