
class segmentTree{
    constructor(n){
        this.n=n;
        this.tree= new Array(4*n).fill(0)
    }
    query(node,start,end,l,r){
        if(r<start || end <l) return 0;
        if(l<=start && end <=r) return this.tree[node];
        const mid= Math.floor((start+end)/2);
        return Math.max(this.query(2*node,start,mid,l,r),this.query(2*node+1, mid+1, end,l,r))
    }

    update(node,start,end,idx,val){
        if(start===end){
            this.tree[node] = Math.max(this.tree[node],val);
            return;
        }
        const mid= Math.floor((start+end)/2);
        if(idx<=mid) this.update(2*node, start,mid,idx,val)
        else this.update(2*node+1,mid+1,end,idx,val);
        this.tree[node] = Math.max(this.tree[2*node], this.tree[2*node+1]);
    }
}
class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    lengthOfLIS(nums) {
        const sorted = [...nums].sort((a,b)=>a-b)
        const rank = new Map();

        sorted.forEach((num,index)=>{
            rank.set(num,index+1)
        })

        const st = new segmentTree(sorted.length);
        let ans=0;
        for(let num of nums){
            const r= rank.get(num);
            const best= st.query(1,1,sorted.length,1,r-1);
            st.update(1,1,sorted.length,r,best+1);
            ans=Math.max(ans,best+1)
        }
        return ans
    }
}
