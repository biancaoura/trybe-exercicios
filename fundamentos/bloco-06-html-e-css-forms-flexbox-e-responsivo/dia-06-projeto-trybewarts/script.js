const email = document.getElementById('email');
const psw = document.getElementById('psw');
const logBtn = document.getElementById('login-btn');
const agree = document.getElementById('agreement');
const submitForm = document.getElementById('submit-btn');
const counter = document.getElementById('counter');
const txtarea = document.getElementById('textarea');
const form = document.getElementById('evaluation-form');

const info = document.getElementById('form-data');
const fName = document.getElementById('input-name');
const lName = document.getElementById('input-lastname');
const formMail = document.getElementById('input-email');
const house = document.getElementById('house');
const family = document.getElementsByName('family');
const content = document.getElementsByClassName('subject');
const rating = document.getElementsByName('rate');

logBtn.addEventListener('click', () => {
  if (email.value === 'tryber@teste.com' && psw.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

agree.addEventListener('click', (e) => {
  if (e.target.checked) {
    submitForm.disabled = false;
  }
});

function countChar() {
  const txtValue = txtarea.value.length;
  counter.innerText = 500 - txtValue;
}
txtarea.addEventListener('keyup', () => {
  countChar();
});

function getContent() {
  const subject = [];
  for (let i = 0; i < content.length; i += 1) {
    if (content[i].checked) {
      subject.push(content[i].value);
    }
  }
  return subject.join(', ');
}

function getRadio(name) {
  for (let i = 0; i < name.length; i += 1) {
    if (name[i].checked) {
      return name[i].value;
    }
  }
}

function getValues() {
  const data = {
    name: `Nome: ${fName.value} ${lName.value}`,
    email: `Email: ${formMail.value}`,
    house: `Casa: ${house.value}`,
    family: `Família: ${getRadio(family)}`,
    content: `Matérias: ${getContent()}`,
    rating: `Avaliação: ${getRadio(rating)}`,
    observation: `Observações: ${txtarea.value}`,
  };
  return data;
}

function updateInfo(getData) {
  const keys = Object.values(getData);
  for (let i = 0; i < keys.length; i += 1) {
    const para = document.createElement('p');
    para.innerText = keys[i];
    info.appendChild(para);
  }
}

submitForm.addEventListener('click', (e) => {
  e.preventDefault();
  const getData = getValues();
  getValues();
  updateInfo(getData);
  form.style.display = 'none';
});
