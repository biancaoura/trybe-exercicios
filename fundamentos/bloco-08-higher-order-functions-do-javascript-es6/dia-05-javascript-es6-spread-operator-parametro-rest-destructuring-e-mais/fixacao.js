// SPREAD OPERATOR - JUNTAR 2 ARRAYS EM 1
const specialFruit = ['Amora', 'Cereja', 'Ponkan', 'Melancia'];
const additionalItens = ['Atemoia', 'Pitaya', 'Nespera'];

const fruitSalad = (fruit, additional) => [...fruit, ...additional];

console.log(fruitSalad(specialFruit, additionalItens));

// SPREAD OP - JUNTAR 2 OBJ
const user = {
  name: 'Maria',
  age: 21,
  nationality: 'Brazilian',
};

const jobInfos = {
  profession: 'Software engineer',
  squad: 'Rocket Landing Logic',
  squadInitials: 'RLL',
};

const person = { ...user, ...jobInfos };
console.log(person);

// REST - FRASE COM OBJETOS
const {
  name, age, nationality, profession, squad, squadInitials,
} = person;
console.log(`Hi, my name is ${name}, I'm a ${age}yo ${nationality}. I work as a ${profession} and my squad is ${squadInitials}-${squad}.`);

// PRODUZA O MESMO RESULTADO UTILIZANDO ARRAY DESTRUCTURING
const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

saudacoes[1](saudacoes[0]); // Olá

const [first, second] = saudacoes;
second(first);

// ARR DESTR FAZER COM QUE VALORES APAREÇAM CORRETAMENTE
let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

[comida, animal, bebida] = [bebida, comida, animal];
console.log(comida, animal, bebida); // arroz gato água

// ARR DESTR - MOSTRAR APENAS NÚMEROS PARES
let numerosPares = [1, 3, 5, 6, 8, 10, 12];

[,,, ...numerosPares] = numerosPares;
console.log(numerosPares); // [6, 8, 10, 12];

// DEFAULT DESTRUCTURING
const getNationality = ({ firstName, nationality = 'Brazilian' }) => `${firstName} is ${nationality}`;

const ctzn = {
  firstName: 'João',
  lastName: 'Jr II',
};

const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};

console.log(getNationality(otherPerson)); // Ivan is Russian
console.log(getNationality(ctzn));

// DEFAULT - 1
const multiply = (number, value = 1) => number * value;

console.log(multiply(8));
