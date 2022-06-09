// PARTE 1

// EXERCÍCIO 1 - RESPEITAR ESCOPO DA FUNÇÃO - ARROW FUNCTION/TEMPLATE LITERALS

// function testingScope(escopo) {
//   if (escopo === true) {
//     var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//     ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
//     console.log(ifScope);
//   } else {
//     var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//     console.log(elseScope);
//   }
//   console.log(ifScope + ' o que estou fazendo aqui ? :O');
// }
// testingScope(true);

const testingScope = (escopo) => {
  if (escopo) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
};
testingScope(true);

// EXERCÍCIO 2 - ARRAY EM ORDEM CRESCENTE - TEMPLATE LITERALS

const oddsAndEvens = [13, 3, 4, 10, 7, 2];
// Seu código aqui.
const sorted = oddsAndEvens.sort((a, b) => a - b);
console.log(`Os números ${sorted} se encontram ordenados de forma crescente !`);

// PARTE 2

// EXERCÍCIO 1 - FATORIAL

const factorial = (n) => {
  let counter = 1;
  for (let i = 1; i < n; i += 1) {
    counter += counter * i;
  }
  return counter;
};
console.log(factorial(6));

// COM TERNARY OPERATOR
const fatorial = (number) => (number > 1 ? number * fatorial(number - 1) : 1);
console.log(fatorial(6));

// EXERCÍCIO 2 - RETORNAR MAIOR PALAVRA;

const longestWord = (phrase) => {
  const array = phrase.split(' ');
  let longest = array[0];
  for (let i = 1; i < array.length - 1; i += 1) {
    if (longest.length < array[i].length) {
      longest = array[i];
    }
  }
  return longest;
};

const long = (phrase) => phrase.split(' ').sort((wordA, wordB) => wordB.length - wordA.length)[0];

console.log(longestWord('Hoje eu acordei feliz'));

// EXERCÍCIO 3 - CONTAR CLICKS NO BOTÃO
// HTML

// EXERCÍCIO 4 - SUBSTITUIR X NA STRING
const skills = ['JavaScript', 'HTML', 'CSS', 'Git', 'Bash'];

function replace(string) {
  const word = (name) => (`Tryber ${name} aqui!
  Tudo bem?`
  );
  let result = `${word(string)}
Minhas cinco principais habilidades são:`;
  skills.forEach((skill) => result = `${result}
- ${skill}`);
  result = `
  ${result}
  #goTrybe
  `;

  return result;
}
console.log(replace('sem nome'));
