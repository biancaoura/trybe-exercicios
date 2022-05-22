// PARTE 1 - OBJETOS E FOR/IN

const info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

// EXERCÍCIO 1 - IMPRIMIR BOAS VINDAS

console.log(`Bem-vinda, ${info.personagem}`);

// EXERCICIO 2 - INSERIR CHAVE

info.recorrente = 'Sim';

console.log(info);

// EXERCICIO 3 - FOR/IN

for (let all in info) {
  console.log(all);
}

// EXERCICIO 4 - FOR/IN

for (let valor in info) {
  console.log(info[valor]);
}

// EXERCICIO 5 - IMPRIMIR OBJETOS

const outro = {
  personagem: 'Tio Patinhas',
  origem: 'Pato Donald e Christmas on Bear Mountain, Dell\'s Four Comics #178',
  nota: 'O último MacPatinhas',
  recorrente: 'Sim',
};

for (let todas in info) {
  for (let todos in outro) {
    if (todas === todos && info[todas] === info.recorrente) {
      console.log('Ambos recorrentes');
    } else if (todas === todos && todas !== info.recorrente) {
      console.log(`${info[todas]} e ${outro[todos]}`);
    }
  }
}

// //

const leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};

// EXERCÍCIO 6 - OBJETO DENTRO DE ARRAY DE OBJETO

const name = `${leitor.nome} ${leitor.sobrenome}`;
const livro = leitor.livrosFavoritos[0].titulo;

console.log(`O livro favorito de ${name} se chama '${livro}'`);

// EXERCICIO 7 - ADICIONAR CHAVE NO ARRAY DENTRO DE OBJETO

leitor.livrosFavoritos[1] = {
  titulo: 'Harry Potter e o Prisioneiro de Azkaban',
  autor: 'JK Rowling',
  editora: 'Rocco',
};

// EXERCICIO 8 - ACESSAR CHAVES EM POSIÇÕES DE ARRAY DIFERENTES

console.log(`Julia tem ${leitor.livrosFavoritos.length} livros favoritos`);

// PARTE 2 - FUNÇÕES

// EXERCICIO 1 - É PALÍNDROMO?

function isPalindrome(word) {
  const reverse = word.split('').reverse().join('');

  if (reverse === word) {
    return true;
  }
  return false;
}
console.log(isPalindrome('arara'));
console.log(isPalindrome('tucano'));

// EXERCÍCIO 2 - ÍNDICE DE MAIOR VALOR

function biggestNumberIndex(numbers) {
  let biggest = numbers[0];
  for (let i = 1; i < numbers.length; i += 1) {
    if (biggest < numbers[i]) {
      biggest = numbers[i];
    }
  }
  return numbers.indexOf(biggest);
}
console.log(biggestNumberIndex([2, 3, 6, 7, 10, 1]));

// EXERCÍCIO 3 - ÍNDICE DE MENOR VALOR

function smallestNumberIndex(numbers) {
  let smallest = numbers[0];
  for (let i = 1; i < numbers.length; i += 1) {
    if (smallest > numbers[i]) {
      smallest = numbers[i];
    }
  }
  return numbers.indexOf(smallest);
}
console.log(smallestNumberIndex([2, 4, 6, 7, 10, 0, -3]));

// EXERCÍCIO 4 - NOME NO ARRAY COM MAIS CARACTERES

function mostCharacters(names) {
  let most = names[0];
  for (let i = 1; i < names.length; i += 1) {
    if (most.length < names[i].length) {
      most = names[i];
    }
  }
  return most;
}
console.log(mostCharacters(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

// EXERCÍCIO 5 - INTEIRO QUE MAIS SE REPETE

function mostTimes(array) {
  array.sort();
  let count = 1;
  let repeat = 1;
  let most;

  for (let i = 1; i < array.length; i += 1) {
    if (array[i] === array[i + 1]) {
      count += 1;
    }
    if (count > repeat) {
      repeat = count;
      most = array[i - 1];
    }
  }
  return most;
}
console.log(mostTimes([2, 3, 2, 5, 8, 2, 3]));

// EXERCÍCIO 6 - SOMA TODOS OS NÚMEROS

function sumNatural(number) {
  let sum = 0;
  for (let i = 1; i <= number; i += 1) {
    sum += i;
  }
  return sum;
}
console.log(sumNatural(5));

// EXERCÍCIO 7 - FINAL DA STRING1 É A STRING2

function stringEnd(word, ending) {
  const array = word.split('');
  const end = ending.split('');

  let check = true;
  for (let i = 0; i < array.length; i += 1) {
    if (array[array.length - end.length + i] !== end[i]) {
      check = false;
    }
  }
  return check;
}
console.log(stringEnd('joaofernando', 'fernan'));
console.log(stringEnd('trybe', 'be'));
