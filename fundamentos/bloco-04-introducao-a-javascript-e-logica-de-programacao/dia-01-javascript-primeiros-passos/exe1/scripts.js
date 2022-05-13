// EXERCICIO 1
const myName = "Bianca";
const birthCity = "São Paulo";
let birthYear = 2030;

console.log(myName);
console.log(birthCity);
console.log(birthYear);

// EXERCICIO 2

let patientId = 50;
let isEnrolled = true;
const patientInfo = {
  firstName: 'Ana',
  lastName: 'Santos',
};
const patientEmail = 'ana@email.com';
patientId = '50';

console.log(typeof patientId);
console.log(typeof isEnrolled);
console.log(typeof patientInfo);
console.log(typeof patientEmail);
console.log(typeof patientAge);

// EXERCICIO 3

const base = 5;
const height = 8;
const area = base * height;
const perimeter = base * 2 + height * 2;

console.log(area);
console.log(perimeter);

// EXERCICIO 4

const nota = 54;

if (nota >= 80) {
    console.log ("Parabéns, você foi aprovada(o)!");
}   else if (nota < 80 && nota >= 60){
    console.log ("Você está na nossa lista de espera")
}   else {
    console.log ("Você foi reprovado")
}

// EXERCICIO 5

let status;
status = 'aprovada';

switch (status) {
    case 'aprovada':
        console.log ("Parabéns, você foi aprovado(a)!");
        break;
    case 'lista':
        console.log ("Você está na nossa lista de espera");
        break;
    case 'reprovada':
        console.log ("Você foi reprovado");
        break;
    default:
        console.log("Não se aplica");
}