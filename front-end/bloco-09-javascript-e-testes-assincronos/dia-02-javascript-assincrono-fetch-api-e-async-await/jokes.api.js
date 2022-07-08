// EXERCÍCIO 1 - IMPRIMIR PIADA NO h2

const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const joke = document.getElementById('jokeContainer');
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' },
  };

  fetch(API_URL, myObject)
    .then((response) => response.json())
    .then((data) => {
      joke.innerText = data.joke;
    });
};

window.onload = () => fetchJoke();
