class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if (t.length === 0 || t.length > s.length) return "";
        const tmap = Array(58).fill(0);
        for (let i = 0; i < t.length; i++) {
            tmap[t.charCodeAt(i) - 65]++;
        }
        const smap = Array(58).fill(0);
        let l = 0;
        let res = "";
        const need = tmap.filter((v) => v > 0).length;
        let have = 0;
        for (let r = 0; r < s.length; r++) {
            const idx = s[r].charCodeAt(0) - 65;
            smap[idx]++;
            // check if window valid
            if (tmap[idx] > 0 && smap[idx] === tmap[idx]) have++;
            while (l <= r && have === need) {
                if (!res || r - l + 1 < res.length) {
                    res = s.slice(l, r + 1);
                }
                const lidx = s[l].charCodeAt(0) - 65;
                smap[lidx]--;
                l++;
                if (tmap[lidx] > 0 && smap[lidx] < tmap[lidx]) have--;
            }
        }
        return res;
    }
}
