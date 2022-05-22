// Desafio 1 - COMPARAR 2 PARÂMETROS
function compareTrue(param1, param2) {
  if (param1 === true && param2 === true) {
    return true;
  }
  return false;
}

// Desafio 2 - ÁREA DE TRIÂNGULO
function calcArea(base, height) {
  const triangleArea = (base * height) / 2;
  return triangleArea;
}

// Desafio 3 - DIVIDIR UMA FRASE
function splitSentence(string) {
  const splitString = string.split(' ');
  return splitString;
}

// Desafio 4 - CONCATENAR STRING
function concatName(array) {
  let lastFirst = `${array[array.length - 1]}, `;
  lastFirst += array[0];
  return lastFirst;
}

// Desafio 5 - CALCULA PONTUAÇÃO
function footballPoints(wins, ties) {
  let points = 0;
  let winPoints = 0;
  let tiePoints = 0;

  if (wins) {
    winPoints += wins * 3;
  }
  if (ties) {
    tiePoints += ties * 1;
  }
  points = winPoints + tiePoints;
  return points;
}

// Desafio 6 - CALCULA REPETIÇÃO DO MAIOR NÚMERO
function highestCount(array) {
  function sortNumber(a, b) {
    return a - b;
  }
  array.sort(sortNumber);

  let counter = 1;
  for (let i = 0; i < array.length - 1; i += 1) {
    if (array[i] === array[array.length - 1]) {
      counter += 1;
    }
  }
  return counter;
}
console.log(highestCount([-2, -2, -1]));

// Desafio 7 - CALCULA GATO MAIS PRÓXIMO DO RATO
function catAndMouse(mouse, cat1, cat2) {
  const distCat1 = Math.abs(cat1 - mouse);
  const distCat2 = Math.abs(cat2 - mouse);

  if (distCat1 === distCat2) {
    return 'os gatos trombam e o rato foge';
  }
  if (distCat1 < distCat2) {
    return 'cat1';
  } if (distCat1 > distCat2) {
    return 'cat2';
  }
}

// Desafio 8 - FIZZBUZZ
function fizzBuzz(array) {
  let newArray = [];

  for (let i = 0; i < array.length; i += 1) {
    const div3 = array[i] % 3;
    const div5 = array[i] % 5;

    if (div3 === 0 && div5 === 0) {
      newArray.push('fizzBuzz');
    } if (div3 === 0 && div5 !== 0) {
      newArray.push('fizz');
    } if (div5 === 0 && div3 !== 0) {
      newArray.push('buzz');
    } if (div3 !== 0 && div5 !== 0) {
      newArray.push('bug!');
    }
  }
  return newArray;
}

// Desafio 9 - CODIFICA E DECODIFICA
function encode(word) {
  let toNumber = word
    .replace(/a/g, 1)
    .replace(/e/g, 2)
    .replace(/i/g, 3)
    .replace(/o/g, 4)
    .replace(/u/g, 5);
  return toNumber;
}

function decode(number) {
  let toWord = number
    .replace(/1/g, 'a')
    .replace(/2/g, 'e')
    .replace(/3/g, 'i')
    .replace(/4/g, 'o')
    .replace(/5/g, 'u');
  return toWord;
}

// Desafio 10 - LISTA DE TECNOLOGIAS
function techList(array, name) {
  let toObject = [];

  if (array.length === 0) {
    return 'Vazio!';
  }

  array.sort();
  array.forEach((tech) => {
    toObject.push({ tech, name });
  });
  return toObject;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
