const findTheOldest = function(people) {
    const currentYear = new Date().getFullYear();
    
    // Calculate the age for each person
    const ages = people.map(person => {
      if (person.yearOfDeath) {
        return person.yearOfDeath - person.yearOfBirth;
      } else {
        return currentYear - person.yearOfBirth;
      }
    });
    
    // Find the index of the oldest person
    const oldestIndex = ages.indexOf(Math.max(...ages));
    
    // Return the oldest person
    return people[oldestIndex];
  };
  
  module.exports = findTheOldest;
  