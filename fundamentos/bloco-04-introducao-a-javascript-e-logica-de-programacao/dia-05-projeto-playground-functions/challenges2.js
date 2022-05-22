// Desafio 11 - NÚMERO DE TELEFONE
function generatePhoneNumber(array) {
  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  let count = {};
  for (let index of array) {
    if (count[index]) {
      count[index] += 1;
    } else {
      count[index] = 1;
    }
    if (array[index] < 0 || array[index] > 9 || count[index] > 2) {
      return ('não é possível gerar um número de telefone com esses valores');
    }
  }
  let phoneString = array.join('');
  let phoneNumber = `(${phoneString.slice(0, 2)}) ${phoneString.slice(2, 7)}-${phoneString.slice(7)}`;
  return phoneNumber;
}

// Desafio 12 - TRIÂNGULO EXISTE?
function triangleCheck(lineA, lineB, lineC) {
  if (lineA < lineB + lineC && lineB < lineA + lineC && lineC < lineA + lineB 
     && lineA > Math.abs(lineB - lineC) && lineA > Math.abs(lineC - lineB)
     && lineB > Math.abs(lineA - lineC) && lineB > Math.abs(lineC - lineA)
     && lineC > Math.abs(lineA - lineB) && lineC > Math.abs(lineB - lineA)) {
      return true;
  }
  return false;
}

// Desafio 13 - CALCULA QUANTIDADE DE ÁGUA
function hydrate(string) {
  let findNumber = string.match(/\d/g);
  let count = findNumber
    .map(Number)
    .reduce(function (numA, numB) {
      return numA + numB;
    }, 0);

  if (count === 1) {
    return '1 copo de água';
  }
  return `${count} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
