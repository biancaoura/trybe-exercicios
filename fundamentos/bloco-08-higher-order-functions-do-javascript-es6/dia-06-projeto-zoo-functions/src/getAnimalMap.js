const data = require('../data/zoo_data');

const { species } = data;

// const NE = species.filter((el) => el.location === 'NE');
// const NW = species.filter((el) => el.location === 'NW');
// const SE = species.filter((el) => el.location === 'SE');
// const SW = species.filter((el) => el.location === 'SW');
// ----------------- COMEÇO ------------------------------- //
// const getLocation = (area) => species.filter((el) => el.location === area);
// ------------------ FIM -------------------------------- //

// const getSpeciesByLocation = () => ({
//   NE: NE.map((el) => el.name),
//   NW: NW.map((el) => el.name),
//   SE: SE.map((el) => el.name),
//   SW: SW.map((el) => el.name),
// });
// // console.log(getSpeciesByLocation());

// --------------------- COMEÇO -------------------------- //
// const getAnimalsByLocation = (area) => ({ [area]: getLocation(area).map(({ name }) => name) });
// console.log(getAnimalsByLocation('NE'));
// --------------------- FIM ----------------------------- //

// --------------------- COMEÇO -------------------------- //
const speciesObj = species.reduce((acc, currAnimal) => {
  const area = acc;
  area[currAnimal.location] = area[currAnimal.location] || [];
  area[currAnimal.location].push(currAnimal.name);
  return area;
}, {});
// console.log(speciesObj);
// --------------------- FIM ----------------------------- //

// const getAllNames = () => ({
//   NE: NE.map(({ name, residents }) => ({ [name]: residents.map((el) => el.name) })),
//   NW: NW.map(({ name, residents }) => ({ [name]: residents.map((el) => el.name) })),
//   SE: SE.map(({ name, residents }) => ({ [name]: residents.map((el) => el.name) })),
//   SW: SW.map(({ name, residents }) => ({ [name]: residents.map((el) => el.name) })),
// });
// // console.log(JSON.stringify(getAllNames()));

// --------------------- COMEÇO -------------------------- //
// RETORNA SOMENTE UM ARRAY COM ARRAY COM NOME DOS ANIMAIS, SEM O NOME DA ESPECIE
const getFilters = (options) => {
// PRECISO PEGAR OS NOMES E COLOCAR DENTRO DE OBJ COM O NOME DAS ESPECIES E JOGAR NUM OBJ COM AS AREAS
  const namesArr = species.map((el) => {
    if (options.sorted && !options.sex) return el.residents.map(({ name }) => name).sort();
    if (!options.sorted && options.sex) {
      return el.residents.filter(({ sex }) => sex === options.sex).map(({ name }) => name);
    }
    return el.residents.filter(({ sex }) => sex === options.sex).map(({ name }) => name).sort();
  });
  return namesArr;
};

// console.log('SEX:', getFilters({ sex: 'male' }));

// console.log('SOMENTE SORTED', getFilters({ sorted: true }));
// console.log('OS 2', getFilters({ sorted: true, sex: 'male' }));

// ---------------------- FIM ---------------------------- //

// const sortedNames = () => ({
//   NE: NE.map(({ name, residents }) => ({ [name]: residents.map((el) => el.name).sort() })),
//   NW: NW.map(({ name, residents }) => ({ [name]: residents.map((el) => el.name).sort() })),
//   SE: SE.map(({ name, residents }) => ({ [name]: residents.map((el) => el.name).sort() })),
//   SW: SW.map(({ name, residents }) => ({ [name]: residents.map((el) => el.name).sort() })),
// });

// const getAnimalsBySex = (animalSex) => ({
//   NE: NE.map(({ name, residents }) => ({ [name]: residents
//     .filter(({ sex }) => sex === animalSex).map((ele) => ele.name) })),
//   NW: NW.map(({ name, residents }) => ({ [name]: residents
//     .filter(({ sex }) => sex === animalSex).map((ele) => ele.name) })),
//   SE: SE.map(({ name, residents }) => ({ [name]: residents
//     .filter(({ sex }) => sex === animalSex).map((ele) => ele.name) })),
//   SW: SW.map(({ name, residents }) => ({ [name]: residents
//     .filter(({ sex }) => sex === animalSex).map((ele) => ele.name) })),
// });

// const getSortedSex = (animalSex) => ({
//   NE: NE.map(({ name, residents }) => ({ [name]: residents
//     .filter(({ sex }) => sex === animalSex).map((ele) => ele.name).sort() })),
//   NW: NW.map(({ name, residents }) => ({ [name]: residents
//     .filter(({ sex }) => sex === animalSex).map((ele) => ele.name).sort() })),
//   SE: SE.map(({ name, residents }) => ({ [name]: residents
//     .filter(({ sex }) => sex === animalSex).map((ele) => ele.name).sort() })),
//   SW: SW.map(({ name, residents }) => ({ [name]: residents
//     .filter(({ sex }) => sex === animalSex).map((ele) => ele.name).sort() })),
// });

// funcoes do if
// function isSorted(options) {
//   if (!options.sex) return sortedNames();
//   if (options.sex === 'female') return getSortedSex('female');
//   return getSortedSex('male');
// }

// function bySex(options) {
//   if (options.sex === 'female') return getAnimalsBySex('female');
//   return getAnimalsBySex('male');
// }

// function filters(options) {
//   if (options.sorted) return isSorted(options);
//   if (options.sex) return bySex(options);
//   return getAllNames();
// }

// ---------------------- COMEÇO ------------------------- //
const getMap = (options) => {
  if (!options || !options.includeNames) return speciesObj;
  // return getFilters(options);
}
// console.log(getMap({ includeNames: true, sorted: true }));
// ---------------------- FIM ---------------------------- //

// function getAnimalMap(options) {
//   if (!options || !options.includeNames) return getSpeciesByLocation();
//   return filters(options);
// }

// module.exports = getAnimalMap;

const animalsBySpecies = (options) => {
  // PRECISO PEGAR OS NOMES E COLOCAR DENTRO DE OBJ COM O NOME DAS ESPECIES E JOGAR NUM OBJ COM AS AREAS
    const namesArr = species.map((el) => {
      if (options.sorted && !options.sex) return el.residents.map(({ name }) => name).sort();
      if (!options.sorted && options.sex) {
        return el.residents.filter(({ sex }) => sex === options.sex).map(({ name }) => name);
      }
      return el.residents.filter(({ sex }) => sex === options.sex).map(({ name }) => name).sort();
    });
    return namesArr;
  };

const sexFilter = (animal, sex) => species.find(({ name }) => name === animal).residents
    .filter((el) => el.sex === sex).map(({ name }) => name);
  // console.log(sexFilter('lions', 'female'));
// console.log(animalsBySpecies({ sorted: true }));

// reduce externo é esse aqui: { NE: [ { lions: 'oi' } ] }
const sex = (options) => species.reduce((acc, currAnimal) => {
  const area = acc;
  area[currAnimal.location] = species.reduce((total, curr) => {
    if (curr.location === currAnimal.location) {
      if (options.sorted) total.push({ [curr.name]: sexFilter(curr.name, options.sex).sort() });
      else total.push({ [curr.name]: sexFilter(curr.name, options.sex) });
    }
    return total;
  }, [])
  return acc;
}, {});
console.log(JSON.stringify(sex({ sorted: true, sex: 'female' })));
// console.log(JSON.stringify(sex({ sorted: true })));
console.log(JSON.stringify(sex({ sex: 'female' })));
// console.log(sex({ sorted: true, sex: 'female' }));
