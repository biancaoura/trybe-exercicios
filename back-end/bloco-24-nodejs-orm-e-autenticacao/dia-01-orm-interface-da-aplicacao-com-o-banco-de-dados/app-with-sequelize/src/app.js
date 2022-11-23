const express = require('express');
require('express-async-errors');

const user = require('./controllers/user.controller');

const errorHandling = require('./middlewares/errorHandling');

const app = express();

app.use(express.json());

app.get('/user', user.getAll);
// /user/search/1?email=leo@test.com
app.get('/user/search/:id', user.getByIdAndEmail);
app.get('/user/:id', user.getById);

app.post('/user', user.createUser);

app.put('/user/:id', user.updateUser);

app.delete('/user/:id', user.deleteUser);

app.use(errorHandling)

module.exports = app;