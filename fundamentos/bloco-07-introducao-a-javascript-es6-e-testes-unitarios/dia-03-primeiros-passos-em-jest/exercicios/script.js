function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }
  return a + b;
}

function myRemove(arr, item) {
  const newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

function encode(word) {
  const toNumber = word
    .replace(/a/g, 1)
    .replace(/e/g, 2)
    .replace(/i/g, 3)
    .replace(/o/g, 4)
    .replace(/u/g, 5);
  return toNumber;
}

function decode(number) {
  const toWord = number
    .replace(/1/g, 'a')
    .replace(/2/g, 'e')
    .replace(/3/g, 'i')
    .replace(/4/g, 'o')
    .replace(/5/g, 'u');
  return toWord;
}

function techList(array, name) {
  const toObject = [];

  if (array.length === 0) {
    return 'Vazio!';
  }

  array.sort();
  array.forEach((tech) => {
    toObject.push({ tech, name });
  });
  return toObject;
}

function hydrate(string) {
  const findNumber = string.match(/\d/g);
  const count = findNumber
    .map(Number)
    .reduce((numA, numB) => numA + numB, 0);
  if (count === 1) {
    return '1 copo de água';
  }
  return `${count} copos de água`;
}

module.exports = {
  sum, myRemove, myFizzBuzz, encode, decode, techList, hydrate,
};
