const data = require('../data/zoo_data');

const getEmployeeByName = (employeeName) => (employeeName === undefined ? {} : data.employees
  .find((el) => el.firstName === employeeName || el.lastName === employeeName));

module.exports = getEmployeeByName;
