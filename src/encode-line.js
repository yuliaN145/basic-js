const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let strLen = str.length;
        let arr = '';
        for (let i = 0; i < strLen; i++) {
            let count = 1;
            while (i < strLen - 1 && str[i] == str[ i + 1])
            {
                count++;
                i++;
            }
            arr += count + str[i]; 
         
           // document.write(count);
            //document.write(str[i]);
        }
        arr = arr.replace(/[0-1]/g, '');
      return arr;
}

module.exports = {
  encodeLine
};
