// PARTE I

// .1 ACESSAR ELEMENTO elementoOndeVoceEsta
const current = document.getElementById('elementoOndeVoceEsta');

// .2 ACESSAR PAI DE elementoOndeVoceEsta E ADD COR
const parent = current.parentElement;
parent.style = 'color: #6495ED';

// .3 ACESSAR primeiroFilhoDoFilho E ADD TEXTO
const firstText = current.firstElementChild;
firstText.innerText = 'Um texto';

// .4 ACESSAR primeiroFilho DE pai
const firstParent = parent.firstElementChild;

// .5 ACESSAR primeiroFilho A PARTIR DE elementoOndeVoceEsta
const firstCurrent = current.previousElementSibling;

// .6 ACESSAR TEXTO DE elementoOndeVoceEsta
const text = current.nextSibling;

// .7 ACESSAR terceiroFilho A PARTIR DE elementoOndeVoceEsta
const thirdCurrent = current.nextElementSibling;

// .8 ACESSAR terceiroFilho A PARTIR DE pai
const thirdParent = parent.children[2];


// PARTE II

// .1 CRIAR IRMÃO PARA elementoOndeVoceEsta
const currentSibling = document.createElement('h1');
currentSibling.innerText = 'novo irmão';
parent.appendChild(currentSibling);

// .2 CRIAR FILHO PARA elementoOndeVoceEsta
const currentChild = document.createElement('p');
currentChild.innerText = 'novo filho';
currentChild.id = 'novoFilho';
current.appendChild(currentChild);

// .3 CRIAR FILHO PARA primeiroFilhoDoFilho
const firstChildChild = document.createElement('p');
firstChildChild.id = 'filhoPrimeiroFilhoDoFilho';
firstChildChild.innerText = 'filho do primeiro filho';
firstChildChild.style.color = 'black';
firstText.appendChild(firstChildChild);


// .4 ACESSAR terceiroFilho A PARTIR DO CRIADO NO .3
const thirdChild = firstChildChild.parentElement.parentElement.nextElementSibling;


// PARTE III

// .1 REMOVER TODOS FILHOS DE paiDoPai, EXCETO pai, elementoOndeVoceEsta E primeiroFilhoDoFilho
const pai = document.getElementById('pai');

const kids = pai.childNodes;
for (let i = pai.childNodes.length - 1; i >= 0; i -= 1) {
  if (kids[i].id !== 'elementoOndeVoceEsta') {
    kids[i].remove();
  }
}
const currentParent = document.getElementById('elementoOndeVoceEsta')
const currentChildren = currentParent.childNodes;
for (let i = currentChildren.length - 1; i >= 0; i -= 1) {
  if (currentChildren[i].id !== 'primeiroFilhoDoFilho') {
    currentChildren[i].remove();
  }
}
const first = document.getElementById('primeiroFilhoDoFilho').childNodes;
