const sumAll = function(start, end) {
    // Swap start and end values if necessary
    if (start > end) {
      [start, end] = [end, start];
    }
  
    let sum = 0;
  
    // Iterate over the range and accumulate the sum
    for (let i = start; i <= end; i++) {
      sum += i;
    }
  
    return sum;
  };
  
  module.exports = sumAll;
  