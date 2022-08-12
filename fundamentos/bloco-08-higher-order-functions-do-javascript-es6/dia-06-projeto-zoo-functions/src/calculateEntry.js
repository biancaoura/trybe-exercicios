const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const child = entrants.filter((el) => el.age < 18).length;
  const adult = entrants.filter((el) => el.age >= 18 && el.age < 50).length;
  const senior = entrants.filter((el) => el.age >= 50).length;
  return { child, adult, senior };
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length < 1) return 0;
  const prices = Object.entries(data.prices).sort().map((ele) => ele[1]);
  const amount = Object.entries(countEntrants(entrants)).sort().map((el) => el[1]);
  return amount.map((age, index) => (age * prices[index])).reduce((a, b) => a + b);
}
module.exports = { calculateEntry, countEntrants };
