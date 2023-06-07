const fibonacci = function (n) {
    if (n <= 0) {
      return 'OOPS';
    }
    if (n === 1 || n === 2) {
      return 1;
    }
    let prev1 = 1;
    let prev2 = 1;
    let result = 0;
    for (let i = 3; i <= n; i++) {
      result = prev1 + prev2;
      prev1 = prev2;
      prev2 = result;
    }
    return result;
  };
  
  module.exports = fibonacci;
  