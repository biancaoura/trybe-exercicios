

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

// PRIMEIRA PESSOA NASCIDA EM 1947
const authorBornIn1947 = () => books.find((el) => el.author.birthYear === 1947).author.name;
console.log(authorBornIn1947());

// LIVRO DE MENOR NOME
function smallerName() {
  let nameBook;
  books.forEach((el) => {
    if (!nameBook || nameBook.length > el.name.length) nameBook = el.name;
  });
  return nameBook;
}
console.log(smallerName());

// PRIMEIRO LIVRO CUJO NOME TEM 26 CHAR
const getNamedBook = () => books.find((el) => el.name.length === 26);
console.log(getNamedBook());

// ORDENAR DATA LANÇAMENTO DECRESCENTE
function booksOrderedByReleaseYearDesc() {
  const ordered = books.slice().sort((a, b) => a.releaseYear - b.releaseYear);
  return ordered;
}
console.log(booksOrderedByReleaseYearDesc());

// CHECAR SE TODOS NASCERAM NO SÉC XX
const everyoneWasBornOnSecXX = () => books.every((el) => el.author.birthYear
> 1900 && el.author.birthYear < 2001);

console.log(everyoneWasBornOnSecXX());

// CHECAR SE ALGUM LIVRO FOI LANÇADO NOS 80's
const someBookWasReleaseOnThe80s = () => books.some((el) => el.releaseYear
> 1979 && el.releaseYear < 1990);

console.log(someBookWasReleaseOnThe80s());

// CHECAR SE NENHUM AUTOR NASCEU NO MESMO ANO
function authorUnique() {
  const dob = books.slice().sort((a, b) => a.author.birthYear - b.author.birthYear);
  for (let i = 0; i < dob.length; i += 1) {
    if (dob[i].author.birthYear === dob[i + 1].author.birthYear) {
      console.log(dob[i], dob[i + 1]);
      return false;
    }
  }
  return true;
}
console.log(authorUnique());
