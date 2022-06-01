const submitButton = document.getElementById('submit-button');

function formValidation() {
  const name = document.getElementById('input-name').value.length;
  const invalidName = name < 10 || name > 40;

  const email = document.getElementById('input-email').value.length;
  const invalidEmail = email < 10 || email > 50;

  const answer = document.getElementById('type-answer').value.length;
  const invalidAnswer = answer < 1;
  if (invalidName || invalidEmail || invalidAnswer) {
    return false;
  }
  return true;
}

submitButton.addEventListener('click', (e) => {
  e.preventDefault();
  const isValid = formValidation();
  if (isValid) {
    alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.');
  } else {
    alert('Dados inválidos');
  }
});
