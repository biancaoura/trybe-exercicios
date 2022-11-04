const connection = require('./connection');

const insert = (person) => connection.execute(
  `INSERT INTO people
    (first_name, last_name, email, phone)
    VALUES (?, ?, ?, ?)`, // placeholders para o que vem depois
  [person.firstName, person.lastName, person.email, person.phone], // (esses aqui são os valores a serem inseridos)
);

module.exports = { insert };
