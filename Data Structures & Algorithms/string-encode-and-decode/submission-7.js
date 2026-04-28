class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let result = "";
        for (let str of strs) {
            const length = str.length;
            result += length + "#" + str;
        }
        return result;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let result = [];
        let i = 0;
        while (i < str.length) {
            let digit = 0;
            while (str[i] >= "0" && str[i] <= "9") {
                digit = digit * 10 + parseInt(str[i++]);
            }
            result.push(str.slice(i + 1, i + 1 + digit));
            i += digit + 1;
        }
        return result;
    }
}
