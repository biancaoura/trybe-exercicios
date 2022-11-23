const express = require('express');
require('express-async-errors');

const user = require('./controllers/user.controller');

const app = express();

app.use(express.json());

app.get('/user', user.getAll);

module.exports = app;