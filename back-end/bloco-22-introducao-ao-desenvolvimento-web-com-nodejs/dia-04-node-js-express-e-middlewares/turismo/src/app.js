const express = require('express');
const app = express();
const validateName = require('./middlewares/validateName');
const validatePrice = require('./middlewares/validatePrice');
const validateDescription = require('./middlewares/validateDescription');
const validateCreatedAt = require('./middlewares/validateCreatedAt');
const validateRating = require('./middlewares/validateRating');

app.use(express.json());

app.post('/activities',
  validateName,
  validatePrice,
  validateDescription,
  validateCreatedAt,
  validateRating,
  (_req, res) => {
  res.status(201).json({ message: 'Atividade cadastrada com sucesso!' });
});

module.exports = app;