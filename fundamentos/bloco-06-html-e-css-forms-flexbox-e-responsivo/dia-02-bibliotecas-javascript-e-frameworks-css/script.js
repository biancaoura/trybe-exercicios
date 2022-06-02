const modal = document.querySelector('.modal');
const span = document.querySelector('.close');

let picker = new Pikaday({
  field: document.getElementById('input-date'),
  format: 'D/M/YYYY',
  toString(date) {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  },
  parse(dateString) {
    const parts = dateString.split('/');
    const day = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10) - 1;
    const year = parseInt(parts[2], 10);
    return new Date(year, month, day);
  },
});

const validation = new JustValidate('#input-container');
validation
  .addField('#input-name', [
    {
      rule: 'required',
      errorMessage: 'Nome é obrigatório',
    },
    {
      rule: 'minLength',
      value: 10,
      errorMessage: 'Este campo precisa ter pelo menos 10 caracteres',
    },
    {
      rule: 'maxLength',
      value: 40,
      errorMessage: 'Este campo precisa ter no máximo 40 caracteres',
    },
  ])
  .addField('#input-email', [
    {
      rule: 'required',
      errorMessage: 'Email é obrigatório',
    },
    {
      rule: 'email',
      errorMessage: 'Email inválido!',
    },
    {
      rule: 'minLength',
      value: 10,
      errorMessage: 'Este campo precisa ter pelo menos 10 caracteres',
    },
    {
      rule: 'maxLength',
      value: 50,
      errorMessage: 'Este campo precisa ter no máximo 50 caracteres',
    },
  ])
  .addField('#type-answer', [
    {
      rule: 'required',
      errorMessage: 'Resposta é obrigatória',
    },
  ])
  .addField('#agree2', [
    {
      rule: 'required',
      errorMessage: 'Você deve aceitar o uso de imagem para participar',
    },
  ])
  .onSuccess(() => {
    modal.style.display = 'block';
  });

span.onclick = () => { modal.style.display = 'none'; };

window.onclick = (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
};
