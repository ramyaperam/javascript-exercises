const removeFromArray = function (array, ...elementsToRemove) {
    // Use Array.filter() to create a new array excluding the elements to be removed
    return array.filter((element) => !elementsToRemove.includes(element));
  };
  
  module.exports = removeFromArray;
  