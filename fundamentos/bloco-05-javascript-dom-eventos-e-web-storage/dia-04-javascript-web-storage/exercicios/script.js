/* eslint-disable no-multiple-empty-lines */
// ALTERAR COM localStorage

// EXERCÍCIO 1 - ALTERAR BG COLOR
const container = document.getElementById('text-container');
function setBgColor(color) {
  container.style.backgroundColor = color;
  localStorage.setItem('bgColor', color);
}
const bgButton = document.querySelectorAll('#bg-color>button');
for (let i = 0; i < bgButton.length; i += 1) {
  bgButton[i].addEventListener('click', (event) => {
    setBgColor(event.target.innerHTML);
  });
}

// EXERCÍCIO 2 - ALTERAR COR DO TEXTO
function setFontColor(color) {
  container.style.color = color;
  localStorage.setItem('fontColor', color);
}
const fontColorButton = document.querySelectorAll('#font-color>button');
for (let i = 0; i < fontColorButton.length; i += 1) {
  fontColorButton[i].addEventListener('click', (event) => {
    setFontColor(event.target.innerHTML);
  });
}

// EXERCÍCIO 3 - ALTERAR TAMANHO DA FONTE
function setFontSize(size) {
  container.style.fontSize = size;
  localStorage.setItem('fontSize', size);
}
const fontSizeButton = document.querySelectorAll('#font-size>button');
for (let i = 0; i < fontSizeButton.length; i += 1) {
  fontSizeButton[i].addEventListener('click', (event) => {
    setFontSize(event.target.innerHTML);
  });
}

// EXERCÍCIO 4 - ALTERAR ESPAÇAMENTO ENTRE LINHAS
function setLineHeight(height) {
  container.style.lineHeight = height;
  localStorage.setItem('lineHeight', height);
}
const lineHeightButton = document.querySelectorAll('#line-height>button');
for (let i = 0; i < lineHeightButton.length; i += 1) {
  lineHeightButton[i].addEventListener('click', (event) => {
    setLineHeight(event.target.innerHTML);
  });
}

// EXERCÍCIO 5 - ALTERAR FONT FAMILY
function setFontFamily(family) {
  container.style.fontFamily = family;
  localStorage.setItem('fontFamily', family);
}
const fontFamilyButton = document.querySelectorAll('#font-family>button');
for (let i = 0; i < fontFamilyButton.length; i += 1) {
  fontFamilyButton[i].addEventListener('click', (event) => {
    setFontFamily(event.target.innerHTML);
  });
}
