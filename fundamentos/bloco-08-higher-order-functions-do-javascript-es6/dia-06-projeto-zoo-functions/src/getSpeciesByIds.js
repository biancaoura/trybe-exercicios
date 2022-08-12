const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => data.species.filter((elem) => ids.includes(elem.id));

module.exports = getSpeciesByIds;
