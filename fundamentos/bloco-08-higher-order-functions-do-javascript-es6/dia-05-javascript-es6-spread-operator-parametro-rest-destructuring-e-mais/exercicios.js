// EX 1 - IMPRIMIR ÁREA DOS 3 RETÂNGULOS
const rectangleArea = (width, height) => width * height;

const rectangle1 = [1, 2];
const rectangle2 = [3, 5];
const rectangle3 = [6, 9];
const rectangles = [rectangle1, rectangle2, rectangle3];

rectangles.forEach((rectangle) => {
  console.log(rectangleArea(...rectangle));
});

// EX 2 - FUNÇÃO RETORNA SOMA DE n ELEMENTOS
const sum = (...args) => args.reduce((a, b) => a + b);
console.log(sum(10, 15, 5, 8, 21));

// EX 3 - RETORNA TODOS OS GOSTOS DA PESSOA (PARAM)
const alex = {
  name: 'Alex',
  age: 26,
  likes: ['fly fishing'],
  nationality: 'Australian',
};

const gunnar = {
  name: 'Gunnar',
  age: 30,
  likes: ['hiking', 'scuba diving', 'taking pictures'],
  nationality: 'Icelandic',
};

const personLikes = ({ name, age, likes }) => `${name} is ${age} years old and likes ${likes.join(', ')}.`;

console.log(personLikes(alex));
console.log(personLikes(gunnar));

// EX 4 - RETORNA TODOS AUSTRALIANOS QUE NASCERAM NO SÉC XX
const people = [
  {
    name: 'Nicole',
    bornIn: 1992,
    nationality: 'Australian',
  },
  {
    name: 'Harry',
    bornIn: 2008,
    nationality: 'Australian',
  },
  {
    name: 'Toby',
    bornIn: 1901,
    nationality: 'Australian',
  },
  {
    name: 'Frida',
    bornIn: 1960,
    nationality: 'Dannish',
  },
  {
    name: 'Fernando',
    bornIn: 2001,
    nationality: 'Brazilian',
  },
];

const filterPeople = (arr) => arr.filter(({ bornIn, nationality }) => nationality === 'Australian' && bornIn > 1900 && bornIn < 2001);
console.log(filterPeople(people));

// EX 5 - TROCAR O 1 E 3 ELEMENTO DE UM ARRAY DE 3 EL.
const myList = [1, 2, 3];
const swap = ([a, b, c]) => [c, b, a];
console.log(swap(myList));

// EX 6 - RETORNAR OBJ REPRESENTANDO O CARRO
const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

const toObject = ([model, brand, year]) => ({ model, brand, year });
console.log(toObject(palio), toObject(shelbyCobra), toObject(chiron));

// EX 7 - RETORNA COMPRIMENTO DO NAVIO COM UNIDADE DE MEDIDA
const ships = [
  {
    name: 'Titanic',
    length: 269.1,
    measurementUnit: 'meters',
  },
  {
    name: 'Queen Mary 2',
    length: 1132,
    measurementUnit: 'feet',
  },
  {
    name: 'Yamato',
    length: 256,
    measurementUnit: 'meters',
  },
];

const shipLength = ({ name, length, measurementUnit }) => `${name} is ${length} ${measurementUnit} long`;

console.log(shipLength(ships[0])); // 'Titanic is 269.1 meters long'
console.log(shipLength(ships[1])); // 'Queen Mary 2 is 1132 feet long'
console.log(shipLength(ships[2])); // 'Yamato is 256 meters long'

// EX 8 - RETORNA MSG DE CUMPRIMENTO, DADO O NOME DE ALGUÉM
const greet = (person, greeting = 'Hi') => `${greeting} ${person}`;

console.log(greet('John')) // 'Hi John'
console.log(greet('John', 'Good morning')) // 'Good morning John'
console.log(greet('Isabela', 'Oi')) // 'Oi Isabela'

// EX 9 - ESPALHAR MESES DO ANO
const yearSeasons = {
  spring: ['March', 'April', 'May'],
  summer: ['June', 'July', 'August'],
  autumn: ['September', 'October', 'November'],
  winter: ['December', 'January', 'February'],
};
const {
  spring, summer, autumn, winter,
} = yearSeasons;
const months = [...spring, ...summer, ...autumn, ...winter];
console.log(months);
