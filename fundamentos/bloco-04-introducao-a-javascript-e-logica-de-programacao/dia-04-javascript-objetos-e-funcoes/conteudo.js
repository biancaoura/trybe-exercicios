// EXERCICIO OBJETOS

let player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: {
        golden: 2,
        silver: 3
    }
}

let perfil = player['name'] + ' ' + player['lastName'];
let idade = player.age + ' anos de idade';

console.log('A jogadora ' + perfil + ' tem ' + idade);

player['bestInTheWorld'] = [2006, 2007, 2008, 2009, 2010, 2018];

console.log('A jogadora ' + perfil + ' foi eleita a melhor do mundo por ' + player['bestInTheWorld'].length + ' vezes');

console.log('A jogadora ' + perfil + ' possui ' + player.medals.golden + ' medalhas de ouro e ' + player.medals.silver + ' medalhas de prata');

// FOR/IN E FOR/OF

let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge',
  };

  for (let nome in names) {
      console.log ('Olá ' + names[nome]);
  }

let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };

  for (carros in car) {
      console.log(carros, car[carros]);
  }

FUNÇÕES

// EXERCICIO 1 - CALCULADORA

function operation(a, b, operator) {
    switch(operator) {
        case '+':
            return a + b;
            break;
        case '-':
            return a - b;
            break;
        case '*':
            return a * b;
            break;
        case '/':
            return a / b;
            break;
        case '%':
            return a % b;
            break;
        default:
            return 'error';
    }
}
console.log(operation(1, 2, '/'));

//EXERCICIO 2 - ACHAR MAIOR NÚMERO ENTRE 2

function biggestNumber(num1, num2) {
    if (num1 > num2) {
        return num1;
    } 
        return num2;
}
console.log(biggestNumber(5, 2));

// EXERCICIO 3 - ACHAR MAIOR NÚMERO ENTRE 3

function biggestNumber(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        return num1;
    }   else if (num2 > num1 && num2 > num3) {
        return num2;
    }   return num3;
}
console.log(biggestNumber(10, 2, 1));

// EXERCICIO 4 - ACHAR SE VALOR É POSITIVO/NEGATIVO

function isPositive(num) {
    if (num < 0) {
        return 'negative';
}   else if (num > 0) {
        return 'positive';
}       
    return 'zero';
}
console.log(isPositive(-1));

// EXERCICIO 5 - TRIÂNGULO VÁLIDO

function triAngles(ang1, ang2, ang3) {
    const triPositive = ang1 > 0 && ang2 > 0 && ang3 > 0;

    if (triPositive) {
        if (ang1 + ang2 + ang3 === 180) {
        return true;
     }  
        return false;
     }
    return 'error';
}
console.log(triAngles(80, 50, 50));