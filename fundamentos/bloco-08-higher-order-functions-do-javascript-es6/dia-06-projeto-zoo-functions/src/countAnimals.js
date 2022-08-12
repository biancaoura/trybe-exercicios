const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  const animals = {};
  if (animal === undefined) {
    species.forEach((el) => { animals[el.name] = el.residents.length; });
    return animals;
  }
  const value = Object.values(animal);
  const all = species.find((el) => el.name === value[0]).residents;
  const sex = all.filter((el) => el.sex === value[1]);
  return value.length === 2 ? sex.length : all.length;
}

module.exports = countAnimals;
