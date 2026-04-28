class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */

    // Input: ["neet","code","love","you"]


encode(strs) {
    const salt = '@';
  let res = '';
  if (!strs.length) return '';
  for (const str of strs) {
    res += str.length + salt + str;
  }
  return res; //4@neet4@code4@love4@you
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const salt = '@';
  const res = [];
  let i = 0;
  while (i < str.length) {
    let j = i; //0
    while (str[j] !== salt) {
      j++; //1
    }
    let len = parseInt(str.substring(i, j)); //4
    i= j+1; //2
    j = i+ len //6
    res.push(str.substring(i,j));
    i=j
  }
  return res
    }
}
