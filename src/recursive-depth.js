const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let self = this;
      let counter = 1;
      let max = 0;
      for (const subArr of arr) {
        if (Array.isArray(subArr)) {
          max = Math.max(self.calculateDepth(subArr), max);
        }
      }
      return counter + max;
  }
}

module.exports = {
  DepthCalculator
};
