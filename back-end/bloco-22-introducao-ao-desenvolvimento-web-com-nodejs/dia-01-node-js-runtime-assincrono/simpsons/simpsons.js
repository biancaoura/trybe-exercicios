const fs = require('fs').promises;

const readSimpsons = async () => {
  const file = await fs.readFile('./simpsons.json');
  const allSimpsons = JSON.parse(file);

  const simpsonsInfo = allSimpsons.map(({ id, name }) => `\n${id} - ${name}`);

  console.log(...simpsonsInfo);
};

const searchSimpsonNameById = async (id) => {
  const file = await fs.readFile('./simpsons.json');
  const simpsonsInfo = JSON.parse(file);

  const findSimpson = simpsonsInfo.find(simpson => Number(simpson.id) === id);
  if (!findSimpson) throw new Error('id not found');

  return findSimpson;
};

const removeIds = async () => {
  const file = await fs.readFile('./simpsons.json');
  const simpsonsInfo = JSON.parse(file);

  const modifiedArr = simpsonsInfo.filter(({ id }) => id !== '6' && id !== '10');

  await fs.writeFile('./simpsons.json', JSON.stringify(modifiedArr));
}

const main = async () => {
  // await readSimpsons(); 
  // console.log(await searchSimpsonNameById(2));
  removeIds();
};

main();