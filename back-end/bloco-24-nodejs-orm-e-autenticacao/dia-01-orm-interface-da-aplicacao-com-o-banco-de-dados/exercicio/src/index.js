const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const book = require('./controllers/book.controller');

app.use(express.json());

app.get('/books', book.getAll);
app.get('/books/:id', book.getById);

app.post('/books', book.createBook);

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));