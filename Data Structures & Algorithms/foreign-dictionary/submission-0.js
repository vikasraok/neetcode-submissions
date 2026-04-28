class Solution {
    /**
     * @param {string[]} words
     * @returns {string}
     */
    foreignDictionary(words) {
        const adj = {};
  const ind = {};
  for (const word of words) {
    for (const char of word) {
      adj[char] = new Set(); // char wise adjacency matrix
      ind[char] = 0; // indegree of each char
    }
  }
  for (let i = 0; i < words.length - 1; i++) {
    let w1 = words[i];
    let w2 = words[i + 1];
    let minLen = Math.min(w1.length, w2.length);
    if (w1.length > w2.length && w1.startsWith(w2)) {
      return "";
    }
    for (let j = 0; j < minLen; j++) {
      if (w1[j] !== w2[j]) {
        if (!adj[w1[j]].has(w2[j])) {
          adj[w1[j]].add(w2[j]);
          ind[w2[j]] += 1;
        }
        break;
      }
    }
  }
  let q = [];
  for (let c in ind) {
    if (!ind[c]) {
      q.push(c);
    }
  }
  let res = [];
  while (q.length != 0) {
    let char = q.shift();
    res.push(char);
    for (let n of adj[char]) {
      ind[n] -= 1;
      if (!ind[n]) {
        q.push(n);
      }
    }
  }
  if (res.length != Object.keys(ind).length) return "";
  return res.join("");
    }
}
