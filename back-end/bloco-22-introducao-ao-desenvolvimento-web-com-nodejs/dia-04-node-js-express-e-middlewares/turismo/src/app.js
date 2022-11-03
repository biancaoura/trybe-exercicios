const express = require('express');
const app = express();
const validateName = require('./middlewares/validateName');

app.use(express.json());

app.post('/activities', validateName, (_req, res) => {
  res.status(201).json({ message: 'Atividade cadastrada com sucesso!' });
});

module.exports = app;