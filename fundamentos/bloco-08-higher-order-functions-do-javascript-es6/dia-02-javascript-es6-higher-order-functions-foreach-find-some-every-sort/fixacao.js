// FOREACH - IMPRIMIR TODOS EMAILS
const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];

const showEmailList = (email) => {
  console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
};

emailListInData.forEach(showEmailList);

// FIND - DIVISÍVEL POR 3 E 5
const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = numbers.find((num) => num % 3 === 0 && num % 5 === 0);
console.log(findDivisibleBy3And5);

// FIND - ENCONTRAR PRIMEIRO NOME C/ 5 LETRAS
const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = names.find((name) => name.length === 5);
console.log(findNameWithFiveLetters);

// const findNameWithFiveLetters = () => {
//   return names.find((name) => name.length === 5);
// }
// console.log(findNameWithFiveLetters());

// FIND - ENCONTRAR MÚSICA C/ ID 31031685
const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
];

function findMusic(id) {
  return musicas.find((song) => song.id === id);
}

console.log(findMusic('31031685'));

// SOME - CHECAR SE NOME CONSTA NO ARRAY
const namesArr = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => arr.some((el) => el === name);

console.log(hasName(namesArr, 'Ana'));

// EVERY - IDADE MÍNIMA
const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const verifyAges = (arr, minimumAge) => arr.every((el) => el.age >= minimumAge);

console.log(verifyAges(people, 18));

// SORT - ORDENAR IDADE ORDEM CRESCENTE
const ppl = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

ppl.sort((a, b) => a.age - b.age);
console.log('Ordem crescente: ', ppl);

// SORT - ORDENAR IDADE ORDEM DECRESCENTE
ppl.sort((a, b) => b.age - a.age);
console.log('Ordem decrescente:', ppl);

// SORT - ORDENAR ORDEM ALFABÉTICA
ppl.sort((a, b) => (a.name > b.name ? 1 : -1));
console.log('Ordem alfabética: ', ppl);
