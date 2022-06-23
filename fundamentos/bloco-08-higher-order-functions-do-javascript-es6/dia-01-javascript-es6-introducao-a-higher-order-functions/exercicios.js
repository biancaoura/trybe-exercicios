// EXERCÍCIO 1 - CRIAR EMAIL DE FUNC NOVO E RETORNAR DADOS NA OUTRA FUNÇÃO
const registerEmployee = (name) => ({
  name,
  email: `${name.toLowerCase().replace(' ', '_')}@trybe.com`,
});

const newEmployees = (fn) => {
  const employees = {
    id1: fn('Pedro Guerra'),
    id2: fn('Luiza Drumond'),
    id3: fn('Carla Paiva'),
  };
  return employees;
};
console.log(newEmployees(registerEmployee));

// EXERCÍCIO 2 - RESULTADO DE LOTERIA
const isWinner = (drawnNum, winNum) => drawnNum === winNum;

const lottery = (drawnNum, fn) => {
  const number = Math.floor(Math.random() * 5);
  console.log(number);
  return fn(drawnNum, number) ? 'Parabéns, você ganhou!' : 'Tente novamente';
};
console.log(lottery(2, isWinner));

// EXERCÍCIO 3 - NOTA DE TESTE
const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const isCorrect = (key, student) => {
  if (student === 'N.A') return 0;
  return student === key ? 1 : -0.5;
};

const checkAnswers = (key, student, fn) => {
  let count = 0;
  for (let i = 0; i < key.length; i += 1) {
    const score = fn(key[i], student[i]);
    count += score;
  }
  return `Nota: ${count}`;
};
console.log(checkAnswers(RIGHT_ANSWERS, STUDENT_ANSWERS, isCorrect));
