class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    distance(point) {
        return point[0]**2+point[1]**2;
    }
        partition(points, l, r){
        const dist = this.distance(points[r]);
        let i=l;
        for(let j=l; j<r; j++){
            if(this.distance(points[j]) <= dist){
                [points[i],points[j]] = [points[j],points[i]];
                i++;
            }
        }
        [points[i],points[r]] = [points[r],points[i]]
        return i;
    }

    kClosest(points, k) {
        const n = points.length;
        let L=0, R = n-1;
            if (k <= 0) return [];
        if (k >= n) return points;
        while(true){
            const pivot = this.partition(points,L,R)
            if(pivot===k) break
            if(pivot<k){
                L = pivot+1
            }else {
                R= pivot -1
            }
            
        }
        return points.slice(0,k);
    }

}
