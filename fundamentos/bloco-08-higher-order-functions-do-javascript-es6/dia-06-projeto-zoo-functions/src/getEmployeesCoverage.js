const data = require('../data/zoo_data');

const { employees, species } = data;

const getStaffById = ({ id }) => employees.find((el) => el.id === id);
const getStaffByName = ({ name }) => employees
  .find((el) => el.firstName === name || el.lastName === name);

const getAnimals = (staff) => species.filter((el) => staff.responsibleFor.includes(el.id));
const getAnimalName = (staff) => getAnimals(staff).map(({ name }) => name);
const getLocations = (staff) => getAnimals(staff).map(({ location }) => location);

const allStaff = () => {
  const names = Object.entries(employees).map(([key, value]) => ({ name: value.firstName }));
  const all = [];
  for (let i = 0; i < names.length; i += 1) all.push(getStaffByName(names[i]));
  return all;
};

const showCoverage = (staff) => {
  const info = (({ id, firstName, lastName }) => {
    const fullName = `${firstName} ${lastName}`;
    return ({
      id,
      fullName,
      species: getAnimalName(staff),
      locations: getLocations(staff),
    });
  })(staff);
  return info;
};

const coverageAll = () => {
  const all = allStaff();
  const allInfo = [];
  for (let i = 0; i < all.length; i += 1) allInfo.push(showCoverage(all[i]));
  return allInfo;
};

function getEmployeesCoverage(employee) {
  if (!employee) return coverageAll();
  if (employee.name) return showCoverage(getStaffByName(employee));
  if (employee.id) {
    if (employees.some(({ id }) => id === employee.id)) return showCoverage(getStaffById(employee));
    throw new Error('Informações inválidas');
  }
}

module.exports = getEmployeesCoverage;
