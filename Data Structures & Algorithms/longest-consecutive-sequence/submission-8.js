class Solution {
  longestConsecutive(nums) {
    const hashSet = new Set(nums);
    let longest = 0;
    for (let num of hashSet){
        let length =1;
        while(hashSet.has(num+length)){ length++}
        longest = Math.max(longest, length)
    }
    return longest
  }
}