const removeFromArray = function (array, ...elementsToRemove) {
    return array.filter((element) => !elementsToRemove.includes(element));
  };
  module.exports = removeFromArray;
  