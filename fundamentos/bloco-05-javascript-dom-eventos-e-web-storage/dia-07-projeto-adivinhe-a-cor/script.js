const colorTitle = document.getElementById('rgb-color');
const options = document.getElementsByClassName('ball');
const answer = document.getElementById('answer');
const button = document.getElementById('reset-game');
const score = document.getElementById('score');

// COR A SER ADIVINHADA
const randomColor = () => (Math.floor(Math.random() * 255));
colorTitle.innerText = `(${randomColor()}, ${randomColor()}, ${randomColor()})`;

// GERAR COR ALEATÓRIA PARA OS CÍRCULOS
const ballColor = () => {
  const randomOption = Math.floor(Math.random() * (options.length));
  for (let i = 0; i < options.length; i += 1) {
    options[i].style.backgroundColor = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
  }
  options[randomOption].style.backgroundColor = `rgb${colorTitle.innerText}`;
};
ballColor();

// MOSTRAR RESPOSTA
function isCorrect() {
  for (let i = 0; i < options.length; i += 1) {
    options[i].addEventListener('click', (e) => {
      if (e.target.style.backgroundColor === `rgb${colorTitle.innerText}`) {
        answer.innerText = 'Acertou!';
      } else {
        answer.innerText = 'Errou! Tente novamente!';
      }
    });
  }
}
isCorrect();

// REINICIAR JOGO
button.addEventListener('click', () => {
  answer.innerText = 'Escolha uma cor';
  colorTitle.innerText = `(${randomColor()}, ${randomColor()}, ${randomColor()})`;
  ballColor();
});

// CRIAR PLACAR
let scoreNumber = Number(score.innerText);
function sumScore() {
  if (answer.innerText === 'Acertou!') {
    scoreNumber += 3;
    score.innerText = scoreNumber;
  }
}
for (let i = 0; i < options.length; i += 1) {
  options[i].addEventListener('click', () => {
    sumScore();
  });
}
