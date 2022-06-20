// loginValidation.js
const greetingMessage = (user) => `Hello, ${user}! Que bom ter você de volta`;

const loginErrorMessage = (user) => `Pessoa usuária '${user}' não encontrada, tente novamente!`;

const user = {
  userName: 'Joana',
  password: 123456,
};

const verifyCredentials = ({ userName, password }) => {
  if (password === 123456 && userName === 'Joana') {
    return greetingMessage(userName);
  }
  return loginErrorMessage(userName);
};

const { userName, password } = user;

module.exports = { greetingMessage, loginErrorMessage, verifyCredentials };
