const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--doublels-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
 function transform(arr) {
  let newArr1 = [];
  for (let i = 0; i < arr.length; i++) {
     newArr1.push(arr[i]);
  }
  for (let i = 0; i < newArr1.length; i++) {
    if (newArr1[i] === '--double-next') {
      let num = arr.indexOf('--double-next');
      if (num === newArr1.length - 1) {
        newArr1.splice(num,1);
      } else {
        newArr1.splice(num,1, num+1)
      }
    }
    if (newArr1[i] === '--discard-prev') {
      let num = arr.indexOf('--discard-prev');
      if (num === 0) {
      newArr1.splice(0,1);
      } else {
        newArr1.splice(num-1,2);
      }
    }
    if (newArr1[i] === '--discard-next') {
      let num = arr.indexOf('--discard-next');
      if (num === newArr1.length - 1) {
        newArr1.splice(num,1);
      } else {
        newArr1.splice(num,2);
      }
    }
    if (newArr1[i] === '--double-prev') {
      let num = arr.indexOf('--double-prev');
      if (num === 0) {
        newArr1.splice(0,1);
      } else {
        newArr1.splice(num-1,2, num-1);
      }
    }
  }

  return newArr1;

}

module.exports = {
  transform
};
