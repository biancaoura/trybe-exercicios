const data = require('../data/zoo_data');

const isManager = (id) => data.employees.some((el) => el.managers.includes(id));

function getRelatedEmployees(managerId) {
  const { employees } = data;
  if (isManager(managerId)) {
    return employees.filter((el) => el.managers.includes(managerId))
      .map((el) => `${el.firstName} ${el.lastName}`);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
