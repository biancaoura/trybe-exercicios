let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// EXERCICIO 1

for (let index = 0; index < numbers.length; index += 1) {
    console.log (numbers[index]);
}

// EXERCICIO 2

let soma = 0;

for (let i = 0; i < numbers.length; i += 1) {
soma += numbers[i];
}
console.log (soma);

// EXERCICIO 3

let soma = 0;

for (let i = 0; i < numbers.length; i += 1) {
    soma += numbers[i];
}

let media = soma / numbers.length;
console.log (media);

// EXERCICIO 4

if (media > 20) {
    console.log ('valor maior que 20');
}   else {
    console.log ('valor menor ou igual a 20');
}

// EXERCICIO 5

let maior = numbers[0];

for (let i = 1; i < numbers.length; i += 1) {
    if (numbers[i] > maior) {
        maior = numbers[i]
    }
}

console.log (maior);

// EXERCICIO 6

let impar = [];
let par = [];

for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] % 2 !== 0) {
        impar.push (numbers[i]);
    }   else {
        par.push (numbers[i]);
    }
}

if (impar.length == 0) {
    console.log ('nenhum valor ímpar encontrado');
}   else {
        console.log (impar);
}

// EXERCICIO 7

let menor = numbers[0];

for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] < menor) {
        menor = numbers[i];
    }
}

console.log (menor);

// EXERCICIO 8

let array = [];

for (i = 1; i <= 25; i += 1) {
    array.push(i)
}

console.log(array);

// EXERCICIO 9

for (let divisao of array) {
    divisao /= 2;
    console.log (divisao);
}