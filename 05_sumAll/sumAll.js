const sumAll = function(start, end) {
    // if (start > end) {
    //   [start, end] = [end, start];
    // }
    let sum = 0;
    for (let i = start; i <= end; i++) {
      sum += i;
    }
  
    return sum;
  };
  
  module.exports = sumAll;
  