const connection = require('./connection');

const insert = (person) => connection.execute(
  `INSERT INTO people
    (first_name, last_name, email, phone)
    VALUES (?, ?, ?, ?)`, // placeholders para o que vem depois
  [person.firstName, person.lastName, person.email, person.phone], // (esses aqui são os valores a serem inseridos)
);

const findAll = () => connection.execute('SELECT * FROM people');

const findById = (id) => connection.execute('SELECT * FROM people WHERE id = ?', [id]);

const update = (person, id) => connection.execute(
  `UPDATE people
    SET first_name = ?, last_name = ?, email = ?, phone = ? WHERE id = ?`,
  [person.firstName, person.lastName, person.email, person.phone, id],
);

const remove = (id) => connection.execute('DELETE FROM people WHERE id = ?', [id]);

module.exports = { insert, findAll, findById, update, remove };
