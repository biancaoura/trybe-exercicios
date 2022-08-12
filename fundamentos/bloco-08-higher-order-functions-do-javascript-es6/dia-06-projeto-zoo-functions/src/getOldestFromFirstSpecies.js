const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const { species, employees } = data;

  const firstAnimal = employees.find((el) => el.id === id).responsibleFor[0];
  const specie = species.find((el) => el.id === firstAnimal).residents;
  const oldest = specie.reduce((a, b) => (a.age > b.age ? a : b));
  return Object.values(oldest);
}

module.exports = getOldestFromFirstSpecies;
