class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const res ={};
        // for (let s of strs){
        //     const sortedStr = s.split('').sort().join('');
        //     if(!res[sortedStr]){
        //         res[sortedStr]=[];
        //     }
        //     res[sortedStr].push(s);
        // }
        // return Object.values(res);
        //["act","cat"]
        for (let s of strs){
            // act
            const count = new Array(26).fill(0);
            for(let c of s){
                // a
                count[c.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
                // count[0] = 1
            }
            const key = count.join(',');
            if(!res[key]){
                res[key]=[]
            }
            res[key].push(s);
        }
        return Object.values(res);
    }
}
