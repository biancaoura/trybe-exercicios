// EX 1 - TRANSFORMAR EM ARRAY
const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

const flatten = () => arrays.reduce((a, b) => a.concat(b));
console.log(flatten());

// .

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// EX 2 - STRING COM NOME DE TODOS AUTORES
const reduceNames = () => books.reduce((acc, curr) => `${acc} ${curr.author.name},`, '');
console.log(reduceNames());

// EX 3 - MÉDIA DE IDADE NA ÉPOCA DE PUBLICAÇÃO
function averageAge() {
  const allAges = books.reduce((acc, curr) => acc + (curr.releaseYear - curr.author.birthYear), 0);
  const numBooks = books.length;
  return allAges / numBooks;
}
console.log(averageAge());

// EX 4 - LIVRO COM MAIOR NOME
const longestNamedBook = () => books.reduce((acc, curr) => (
  curr.name.length > acc ? curr.name : acc), 0);
console.log(longestNamedBook());

// EX 5 - VEZES 'a' APARECE
const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  return names.join('').split('').reduce((acc, curr) => {
    if (curr.match(/a/ig)) return acc + 1;
    return acc;
  }, 0);
}
console.log(containsA());

// EX 6 - ARRAY DE OBJ { name: nome do aluno, average: media das notas }
const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage() {
  const average = students.map((el, i) => ({
    name: el,
    average: grades[i].reduce((a, b) => a + b) / grades[i].length,
  }));
  return average;
}
console.log(studentAverage());
