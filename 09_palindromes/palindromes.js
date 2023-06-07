const palindromes = function (str) {
  // Remove non-alphanumeric characters and convert to lowercase
  const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');

  // Check if the cleaned string is equal to its reversed version
  return cleanedStr === cleanedStr.split('').reverse().join('');
};
module.exports = palindromes;