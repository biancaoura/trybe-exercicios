const board = document.querySelector('#pixel-board');
const palette = document.querySelectorAll('.color');

// CRIA PIXEL P/ PINTAR
function createGrid(n) {
  for (let i = 0; i < n; i += 1) {
    for (let j = 0; j < n; j += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      board.appendChild(pixel);
    }
  }
  board.style.width = `${n * 40}px`;
}
createGrid(5);

const pixels = document.getElementsByClassName('pixel');

// MUDA CLASSE DAS CORES
function addClass(event) {
  const selected = document.querySelector('.selected');
  selected.classList.remove('selected');
  event.target.classList.add('selected');
}

for (let i = 0; i < palette.length; i += 1) {
  palette[i].addEventListener('click', addClass);
}

// RETORNA COR
function paintTheBrush() {
  const selected = document.querySelector('.selected');
  const color = getComputedStyle(selected).backgroundColor;
  return color;
}

// PINTA PIXEL
board.addEventListener('click', (event) => {
  if (event.target.classList.contains('pixel')) {
    const color = paintTheBrush();
    const evento = event;
    evento.target.style.backgroundColor = color;
  }
});

// BOTÃO PRA LIMPAR
function createButton() {
  const eraseButton = document.createElement('button');
  eraseButton.innerText = 'Limpar';
  eraseButton.id = 'clear-board';
  eraseButton.style.marginRight = '30px';
  board.insertAdjacentElement('beforebegin', eraseButton);
}
createButton();

function clearBoard() {
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.backgroundColor = 'white';
  }
}

const clearButton = document.getElementById('clear-board');
clearButton.addEventListener('click', clearBoard);

// TAMANHO PERSONALIZADO DO QUADRO
function createInputBox() {
  const input = document.createElement('input');
  input.id = 'board-size';
  input.setAttribute('type', 'number');
  input.setAttribute('value', 'default');
  input.setAttribute('max', '50');
  input.setAttribute('min', '1');
  input.setAttribute('placeholder', 'somente números');
  input.style = 'height: 30px';
  input.style.width = '130px';
  board.insertAdjacentElement('beforebegin', input);
}
createInputBox();

function createInputButton() {
  const inputButton = document.createElement('button');
  inputButton.id = 'generate-board';
  inputButton.setAttribute('type', 'submit');
  inputButton.setAttribute('name', 'size');
  inputButton.innerText = 'VQV';
  board.insertAdjacentElement('beforebegin', inputButton);
}
createInputButton();

// JOGA O VALOR DO INPUT NO GRID
const inputButton = document.getElementById('generate-board');
const inputBox = document.getElementById('board-size');
inputButton.addEventListener('click', () => {
  board.innerHTML = '';
  if (inputBox.value === '') {
    alert('Board inválido!');
    createGrid(5);
  } if (inputBox.value < 5) {
    createGrid(5);
  } else if (inputBox.value > 50) {
    createGrid(50);
  } else {
    createGrid(inputBox.value);
  }
});

// GERA COR ALEATÓRIA
function randomColor() {
  return Math.floor(Math.random() * 256);
}
for (let i = 1; i < palette.length; i += 1) {
  palette[i].style.backgroundColor = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
}

// ESTILIZA BOTÃO
const buttons = document.getElementsByTagName('button');
for (let i = 0; i < buttons.length; i += 1) {
  buttons[i].style.backgroundColor = 'dimgrey';
  buttons[i].style.borderRadius = '20%';
  buttons[i].style.border = '1px solid dimgrey';
  buttons[i].style.marginLeft = '10px';
  buttons[i].style.height = '30px';
  buttons[i].style.color = 'white';
}
