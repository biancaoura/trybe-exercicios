// Desafio 1
const compareTrue = (param1, param2) => param1 && param2;

// Desafio 2
const calcArea = (base, height) => (base * height) / 2;

// Desafio 3
const splitSentence = (string) => string.split(' ');

// Desafio 4
const concatName = (array) => `${array[array.length - 1]}, ${array[0]}`;

// Desafio 5
const footballPoints = (wins, ties) => wins * 3 + ties;

// Desafio 6
const highestCount = (arr) => arr.filter((el) => el === Math.max(...arr)).length;

// Desafio 7
const catAndMouse = (mouse, cat1, cat2) => {
  let distCat1 = Math.abs(cat1 - mouse);
  let distCat2 = Math.abs(cat2 - mouse);

  if (distCat1 < distCat2) return 'cat1';
  else if (distCat1 > distCat2) return 'cat2';
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
const fizzBuzz = (array) => {
  let newArr = [];

  for (let i = 0; i < array.length; i += 1) {
    const div3 = array[i] % 3;
    const div5 = array[i] % 5;

    if (div3 === 0 && div5 === 0) newArr.push('fizzBuzz');
    else if (div3 === 0) newArr.push('fizz');
    else if (div5 === 0) newArr.push('buzz');
    else newArr.push('bug!');
  }
  return newArr;
}

// Desafio 9
const encode = (word) => word
  .replace(/a/g, 1)
  .replace(/e/g, 2)
  .replace(/i/g, 3)
  .replace(/o/g, 4)
  .replace(/u/g, 5);

const decode = (number) => number
  .replace(/1/g, 'a')
  .replace(/2/g, 'e')
  .replace(/3/g, 'i')
  .replace(/4/g, 'o')
  .replace(/5/g, 'u');

// Desafio 10
const techList = (array, name) => {
  let list = [];

  if (!array.length) return 'Vazio!';

  array.sort().forEach((tech) => list.push({ tech, name }));

  return list;
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
