/* eslint-disable prefer-arrow-callback */
/* eslint-disable max-len */
function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

// EXERCÍCIO 1 - CRIAR DIAS DO CALENDÁRIO NOV/DEZ
function createDays() {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const day = document.getElementById('days');

  for (let i = 0; i < dezDaysList.length; i += 1) {
    const today = dezDaysList[i];
    const createDay = document.createElement('li');

    if (today === 24 || today === 31) {
      createDay.className = 'day holiday';
      createDay.innerText = today;
      day.appendChild(createDay);
    } else if (today === 4 || today === 11 || today === 18) {
      createDay.className = 'day friday';
      createDay.innerText = today;
      day.appendChild(createDay);
    } else if (today === 25) {
      createDay.className = 'day holiday friday';
      createDay.innerText = today;
      day.appendChild(createDay);
    } else {
      createDay.className = 'day';
      createDay.innerText = today;
      day.appendChild(createDay);
    }
  }
}
createDays();

// EXERCÍCIO 2 - CRIAR BOTÃO FERIADO
function createHolidayButton(feriados) {
  const button = document.querySelector('.buttons-container');
  const makeButton = document.createElement('button');
  makeButton.id = 'btn-holiday';
  button.appendChild(makeButton);
  makeButton.innerText = feriados;
}
createHolidayButton('Feriados');

// EXERCÍCIO 3 - CLICAR NO BOTÃO E MUDAR COR DE FUNDO DOS FERIADOS
function holidayColor() {
  const button = document.getElementById('btn-holiday');
  const holiday = document.querySelectorAll('.holiday');

  function swapColor() {
    for (let i = 0; i < holiday.length; i += 1) {
      if (holiday[i].style.backgroundColor === 'violet') {
        holiday[i].style.backgroundColor = 'rgb(238,238,238)';
      } else {
        holiday[i].style.backgroundColor = 'violet';
      }
    }
  }
  button.addEventListener('click', swapColor);
}
holidayColor();

// EXERCÍCIO 4 - CRIAR BOTÃO SEXTA-FEIRA
function createFridayButton(string) {
  const button = document.querySelector('.buttons-container');
  const makeButton = document.createElement('button');
  makeButton.id = 'btn-friday';
  button.appendChild(makeButton);
  makeButton.innerText = string;
}
createFridayButton('Sexta-feira');

// EXERCÍCIO 5 - CLICAR NO BOTÃO E MUDAR TEXTO DAS SEXTA-FEIRAS
const friday = [4, 11, 18, 25];
function changeText(array) {
  const button = document.getElementById('btn-friday');
  const text = 'TGIF';
  const fridays = document.querySelectorAll('.friday');
  button.addEventListener('click', function () {
    for (let i = 0; i < fridays.length; i += 1) {
      if (!isNaN(fridays[i].innerText)) {
        fridays[i].innerText = text;
      } else {
        fridays[i].innerText = array[i];
      }
    }
  });
}
changeText(friday);

// EXERCÍCIO 6 - AUMENTAR FONTE AO PASSAR O MOUSE