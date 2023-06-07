function reverseString(string) {
    // Convert the string to an array, reverse it, and join the characters back into a string
    return string.split('').reverse().join('');
  }
  
  module.exports = reverseString;
  