// EXERCICIO 1

const a = 12;
const b = 11;

console.log (a + b); // ADIÇÃO
console.log (a - b); // SUBTRAÇÃO
console.log (a * b); // MULTIPLICAÇÃO
console.log (a / b); // DIVISÃO
console.log (a % b); // MÓDULO

//EXERCICIO 2

const num1 = 15;
const num2 = 20;

if (num1 > num2) {
    console.log (num1);
}    else {
        console.log (num2);
    }

// EXERCICIO 3

const x = 15;
const y = 12;
const z = 19;

if (x > y && x > z) {
    console.log (x);
}   else if (y > x && y > z) {
     console.log (y);
}   else {
     console.log (z);
}

// EXERCICIO 4

const valor = -10;
if (valor < 0) {
        console.log ('negative');
}   else if (valor > 0) {
        console.log ('positive');
}   else {
        console.log ('zero');
}

// EXERCICIO 5

const tri1 = 80;
const tri2 = 50;
const tri3 = 50;

const triPositive = tri1 > 0 && tri2 > 0 && tri3 > 0;

if (triPositive) {
    if (tri1 + tri2 + tri3 === 180) {
      console.log (true);
 }   else {
      console.log (false);
 }
}   else {
       console.log ('error');
}

// EXERCICIO 6

let piece = "QUEEN"
let lower = piece.toLowerCase();

switch (lower) {
    case 'king':
        console.log ('move one square');
        break;
    case 'queen':
        console.log ('move anywhere without jumping');
        break;
    case 'bishop':
        console.log ('move diagonally');
        break;
    case 'rook':
        console.log ('move vertically or horizontally');
        break;
    case 'knight':
        console.log ('jump to the corner of a 2x3 rectangle');
        break;
    case 'pawn':
        console.log ('move one square forward');
        break;
    default:
        console.log ('error');
}

// EXERCICIO 7

let nota = 400;
let valido = (nota >= 0 && nota <=100)

if (valido) {
    if (nota >= 90) {
            console.log ('A');
    }   else if (nota >= 80) {
            console.log ('B');
    }   else if (nota >= 70) {
            console.log ('C');
    }   else if (nota >= 60) {
            console.log ('D');
    }   else if (nota >= 50) {
            console.log ('E');
    }   else {
            console.log ('F');
    }   
}   else {
    console.log ('error');
}

// EXERCICIO 8

const d = 21;
const e = 31;
const f = 41;

if (d % 2 === 0 || e % 2 === 0 || f % 2 === 0) {
    console.log (true);
}   else {
    console.log (false);
}

// EXERCICIO 9

const g = 10;
const h = 11;
const i = 12;

if (g % 2 !== 0 || h % 2 !== 0 || i % 2 !== 0) {
    console.log (true);
}   else {
    console.log (false);
}

// EXERCICIO 10

const custo = 10;
const venda = -40;

const lucroUnidade = venda - (custo + custo * 0.2);
const lucroMil = lucroUnidade * 1000;

const valorReal = custo >= 0 && venda >= 0

if (valorReal) {
    console.log (lucroMil)
}   else {
    console.log ('valor não existente');
}

// EXERCICIO 11

let salarioBruto = 6000;
let aliquotaINSS;
let salarioLiquido;


if (salarioBruto <= 1556.94) {
        aliquotaINSS = salarioBruto - (salarioBruto * 0.08);
}   else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
        aliquotaINSS = salarioBruto - (salarioBruto * 0.09);
}   else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
        aliquotaINSS = salarioBruto - (salarioBruto * 0.11);
}   else {
        aliquotaINSS = salarioBruto - 570.88;
}

if (aliquotaINSS <= 1903.98) {
        salarioLiquido = aliquotaINSS;
}   else if (aliquotaINSS >= 1903.99 && aliquotaINSS <= 2826.65) {
        salarioLiquido = aliquotaINSS - ((aliquotaINSS * 0.075) - 142.8);
}   else if (aliquotaINSS >= 2826.66 && aliquotaINSS <= 3751.05) {
        salarioLiquido = aliquotaINSS - ((aliquotaINSS * 0.15) - 354.8);
}   else if (aliquotaINSS >= 3751.06 && aliquotaINSS <= 4664.68) {
        salarioLiquido = aliquotaINSS - ((aliquotaINSS * 0.225) - 636.13);
}   else {
        salarioLiquido = aliquotaINSS - ((aliquotaINSS * 0.275) - 869.36);
}

console.log (salarioLiquido);