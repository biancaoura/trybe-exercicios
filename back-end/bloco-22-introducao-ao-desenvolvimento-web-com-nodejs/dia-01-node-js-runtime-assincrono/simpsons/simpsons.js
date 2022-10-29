const fs = require('fs').promises;

const readSimpsons = async () => {
  const file = await fs.readFile('./simpsons.json');
  const allSimpsons = JSON.parse(file);

  const simpsonsInfo = allSimpsons.map(({ id, name }) => `\n${id} - ${name}`);
  
  console.log(...simpsonsInfo);
};

const main = async () => {
  await readSimpsons();
};

main();