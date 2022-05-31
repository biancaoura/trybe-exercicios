const listContainer = document.getElementById('lista-tarefas');
const addButton = document.getElementById('criar-tarefa');
const inputBox = document.getElementById('texto-tarefa');

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
    listItem[i].addEventListener('click', (event) => {
      event.target.classList.add('selected');
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
function createSaveButton() {
  const saveButton = document.createElement('button');
  saveButton.id = 'salvar-tarefas';
  saveButton.innerText = 'Salvar lista';
  removeButton.insertAdjacentElement('afterend', saveButton);
}
createSaveButton();

function addTaskInDOM() {
  const taskList = JSON.parse(localStorage.getItem('tasks')); // transforma string em array
  const listLength = taskList.length - 1;
  const taskText = taskList[listLength];
  const task = document.createElement('li');
  task.innerText = taskText;
  listContainer.appendChild(task);
}

// ACHO QUE TENHO QUE MUDAR ESSA FUNÇÃO: oldList É O ARRAY DE li
function addTaskToStorage() {
  const oldList = JSON.parse(localStorage.getItem('tasks')); //transforma string em array
  // const listText = inputBox.value;
  // oldList.push(listText);
  // localStorage.setItem('tasks', JSON.stringify(oldList));
  // addTaskInDOM();
// }
for (let i = 0; i < listItem.length; i += 1) {
  const listText = listItem[i].innerHTML;
  oldList.push(listText[i]);
}
  localStorage.setItem('tasks', JSON.stringify(oldList));
  console.log(oldList);
  addTaskInDOM();
  }

// function initialRendering() {
//   if (localStorage.getItem('tasks') === null) {
//     // localStorage.setItem('tasks', JSON.stringify([]));
//     return false;
//   } else {
//     const taskList = JSON.parse(localStorage.getItem('tasks'));
//     for (let i = 0; i < taskList; i += 1) {
//       const listElement = document.createElement('li');
//       listElement.innerText = taskList[i];
//       listContainer.appendChild(listElement);
//     }
//   }
// }

function initialRendering() {
  const taskList = JSON.parse(localStorage.getItem('tasks'));
  for (let i = 0; i < taskList.length; i += 1) {
    const listElement = document.createElement('li');
    listElement.innerText = taskList[i];
    listContainer.appendChild(listElement);
  }
}

const saveButton = document.getElementById('salvar-tarefas');
saveButton.addEventListener('click', addTaskToStorage);

window.onload = () => { initialRendering(); };
