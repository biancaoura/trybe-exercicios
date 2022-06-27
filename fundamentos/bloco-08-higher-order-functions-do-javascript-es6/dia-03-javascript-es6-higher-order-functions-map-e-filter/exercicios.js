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

// EXERCÍCIO 1 - ARRAY COM STRINGS NO FORMATO: 'título - gênero - autor'
function formatedBookNames() {
  return books.map((el) => `${el.name} - ${el.genre} - ${el.author.name}`);
}
console.log(formatedBookNames());

// EXERCÍCIO 2 - ARRAY DE OBJETOS: author, age ORDENADO POR IDADE NA DATA DE PUBLICAÇÃO
function nameAndAge() {
  return books.map((el) => (
    {
      author: el.author.name,
      age: el.releaseYear - el.author.birthYear,
    }
  )).sort((a, b) => a.age - b.age);
}
console.log(nameAndAge());

// EXERCÍCIO 3 - ARRAY COM OBJETOS DE FANTASIA/FICÇÃO CIENTÍFICA
function fantasyOrScienceFiction() {
  return books.filter((el) => el.genre === 'Fantasia' || el.genre === 'Ficção Científica');
}
console.log(fantasyOrScienceFiction());

// EXERCÍCIO 4 - ARRAY COM LIVROS 60+ ANOS, ORDENAR PELO MAIS ANTIGO
function oldBooksOrdered() {
  return books.filter((el) => (2022 - el.releaseYear) > 60)
    .sort((a, b) => a.releaseYear - b.releaseYear);
}
console.log(oldBooksOrdered());

// EXERCÍCIO 5 - ARRAY DOS NOMES DOS AUTORES (ex. 3) EM ORDEM ALFABÉTICA
function fantasyOrScienceFictionAuthors() {
  return fantasyOrScienceFiction().map((el) => el.author.name).sort();
}
console.log(fantasyOrScienceFictionAuthors());

// EXERCÍCIO 6 - ARRAY COM NOME DOS LIVROS 60+ ANOS
function oldBooks() {
  return oldBooksOrdered().map((el) => el.name);
}
console.log(oldBooks());

// EXERCÍCIO 7 - ENCONTRAR LIVRO DE AUTOR CUJO NOME COMEÇA COM 3 INICIAIS
function authorWith3DotsOnName() {
  return books.find((el) => el.author.name.split('').filter((char) => char === '.').length === 3).name;
}
console.log(authorWith3DotsOnName());
