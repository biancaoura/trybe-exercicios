const inputBtn = document.getElementById('criar-carta');
const inputTxt = document.getElementById('carta-texto');
const txtParent = document.getElementById('carta-gerada');
const counter = document.getElementById('carta-contador');
const wordCounter = document.querySelector('.hidden');
const style = ['newspaper', 'magazine1', 'magazine2'];
const size = ['medium', 'big', 'reallybig'];
const rotation = ['rotateleft', 'rotateright'];
const distortion = ['skewleft', 'skewright'];

// ESCOLHER CLASSE ALEATÓRIA
function changeStyle() {
  const randomStyle = style[Math.floor(Math.random() * style.length)];
  return randomStyle;
}

function changeSize() {
  const randomSize = size[Math.floor(Math.random() * size.length)];
  return randomSize;
}

function changeRotation() {
  const randomRotation = rotation[Math.floor(Math.random() * rotation.length)];
  return randomRotation;
}

function changeDistortion() {
  const randomDistortion = distortion[Math.floor(Math.random() * distortion.length)];
  return randomDistortion;
}

// GERAR CLASSE ALEATÓRIA
function randomClass() {
  const word = document.getElementsByTagName('span');
  for (let i = 0; i < word.length; i += 1) {
    word[i].classList.add(changeStyle(), changeSize(), changeRotation(), changeDistortion());
  }
}
randomClass();

// CONTADOR DE PALAVRAS
function countWords() {
  const word = document.getElementsByTagName('span');
  const len = word.length;
  counter.innerText = len;
  wordCounter.style.display = 'inline';
  counter.style.display = 'inline';
}

// CLICA NA LETRA E MUDA ESTILO
function changeWord(e) {
  e.target.className = '';
  e.target.classList.add(changeStyle(), changeSize(), changeRotation(), changeDistortion());
}

// CRIAR SPAN E CHECAR SE EXISTE CONTEÚDO
inputBtn.addEventListener('click', () => {
  const splitSentence = inputTxt.value.split(' ');
  txtParent.innerText = '';
  if (!inputTxt.value.replace(/\s/g, '').length) {
    const alertMsg = document.createElement('p');
    alertMsg.innerText = 'Por favor, digite o conteúdo da carta.';
    txtParent.appendChild(alertMsg);
  }
  for (let i = 0; i < splitSentence.length; i += 1) {
    const word = document.createElement('span');
    word.innerText = splitSentence[i];
    word.addEventListener('click', changeWord);
    txtParent.appendChild(word);
  }
  randomClass();
  countWords();
});
