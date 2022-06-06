const listContainer = document.getElementById('lista-tarefas');
const addButton = document.getElementById('criar-tarefa');
const inputBox = document.getElementById('texto-tarefa');
const saveButton = document.getElementById('salvar-tarefas');
const upButton = document.getElementById('mover-cima');
const downButton = document.getElementById('mover-baixo');
const rmButton = document.getElementById('remover-selecionado');

// CRIA ELEMENTOS li
function createTaskItem(value) {
  const listItem = document.createElement('li');
  listItem.innerText = value;
  listItem.classList.add('list-item');
  listItem.backgroundColor = 'white';
  listContainer.appendChild(listItem);
}

const listItem = document.getElementsByClassName('list-item');

// CONECTA BOTÃO NO li E ADD CLASSE AO CLICAR NO li
addButton.addEventListener('click', () => {
  const inputText = inputBox.value;
  createTaskItem(inputText);
  inputBox.value = '';
  for (let i = 0; i < listItem.length; i += 1) {
    listItem[i].addEventListener('click', (e) => {
      e.target.classList.add('selected');
    });
  }
});

// TOGGLE CLASS (PINTAR)
listContainer.addEventListener('click', (e) => {
  const selected = document.querySelectorAll('.selected');
  if (e.target.nodeName === 'LI') {
    selected.forEach((el) => {
      el.classList.remove('selected');
    });
    e.target.classList.add('selected');
  }
});

// TOGGLE CLASS(RISCAR)
listContainer.addEventListener('dblclick', (e) => {
  e.target.classList.toggle('completed');
});

// BOTÃO DE LIMPAR
function createClearButton() {
  const clearButton = document.createElement('button');
  clearButton.id = 'apaga-tudo';
  clearButton.innerText = 'Apagar lista';
  addButton.insertAdjacentElement('afterend', clearButton);
}
createClearButton();

const clearButton = document.getElementById('apaga-tudo');
clearButton.addEventListener('click', () => {
  listContainer.innerHTML = '';
});

// BOTÃO DE REMOVER SELECIONADOS
function createRemoveButton() {
  const removeButton = document.createElement('button');
  removeButton.id = 'remover-finalizados';
  removeButton.innerText = 'Remover itens finalizados';
  clearButton.insertAdjacentElement('afterend', removeButton);
}
createRemoveButton();

const removeButton = document.getElementById('remover-finalizados');
removeButton.addEventListener('click', () => {
  for (let i = listItem.length - 1; i >= 0; i -= 1) {
    if (listItem[i].classList.contains('completed')) {
      listItem[i].remove();
    }
  }
});

// ADD BOTÃO QUE SALVA CONTEÚDO DA LISTA
function initialRendering() {
  if (localStorage.getItem('tasks') === null) {
    localStorage.setItem('tasks', []);
  }
  listContainer.innerHTML = localStorage.getItem('tasks');
  for (let i = 0; i < listItem.length; i += 1) {
    listItem[i].addEventListener('click', (e) => {
      e.target.classList.add('selected');
    });
    listItem[i].addEventListener('dblclick', (e) => {
      e.target.classList.toggle('completed');
    });
  }
}
window.onload = () => { initialRendering(); };
saveButton.addEventListener('click', () => {
  localStorage.setItem('tasks', listContainer.innerHTML);
});

// MOVER ITEM P/ CIMA E P/ BAIXO
upButton.addEventListener('click', () => {
  for (let i = 0; i < listItem.length; i += 1) {
    if (listItem[i].classList.contains('selected')
    && listItem[i] !== listItem[0]) {
      const item = listItem[i];
      const previous = listItem[i - 1];
      const newItem = item;
      listContainer.removeChild(item);
      listContainer.insertBefore(newItem, previous);
    }
  }
});
downButton.addEventListener('click', () => {
  for (let i = listItem.length - 1; i >= 0; i -= 1) {
    if (listItem[i].classList.contains('selected')
    && listItem[i] !== listItem[listItem.length - 1]) {
      const next = listItem[i + 2];
      const item = listItem[i];
      const newItem = item;
      listContainer.removeChild(item);
      listContainer.insertBefore(newItem, next);
    }
  }
});

// REMOVER ITEM SELECIONADO
rmButton.addEventListener('click', () => {
  for (let i = 0; i < listItem.length; i += 1) {
    if (listItem[i].classList.contains('selected')) {
      listItem[i].remove();
    }
  }
});
