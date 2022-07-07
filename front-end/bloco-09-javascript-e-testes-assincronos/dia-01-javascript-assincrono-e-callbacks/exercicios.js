// EXERCÍCIO 3 - MUDAR FUNÇÃO PARA IMPRIMIR DEPOIS DE 4s
const getPlanet = () => {
  const mars = {
    name: 'Mars',
    distanceFromSun: {
      value: 227900000,
      measurementUnit: 'kilometers',
    },
  };
  setTimeout(() => console.log('Returned planet: ', mars), 4000);
};

getPlanet();

// EXERCÍCIO 4 - IMPRIMIR TEMPERATURA APÓS ATÉ 5s
const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

const sendMarsTemperature = () => {
  setTimeout(() => console.log(`Mars temperature is: ${getMarsTemperature()}°C.`), messageDelay());
};

sendMarsTemperature();

// EXERCÍCIO 5 - ADD CALLBACK NA FUNÇÃO DE MOSTRAR TEMPERATURA
const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

const toFahrenheit = (degreeCelsius) => (degreeCelsius * (9 / 5)) + 32;

const temperatureInFahrenheit = (temperature) => console.log(`It is currently ${toFahrenheit(temperature)}°F at Mars`);

const greet = (temperature) => console.log(`Hi there! Curiosity here. Right now is ${temperature}°C at Mars`);

const sendMarsTemperature = (callback) => {
  const temp = getMarsTemperature();
  setTimeout(() => callback(temp), messageDelay());
};

sendMarsTemperature(temperatureInFahrenheit);
sendMarsTemperature(greet);

// EXERCÍCIO 6 - ADD OUTRA CALLBACK PARA CASO DE ERRO
const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

const toFahrenheit = (degreeCelsius) => (degreeCelsius * (9 / 5)) + 32;

const temperatureInFahrenheit = (temperature) => console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);

const greet = (temperature) => console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

const handleError = (errorReason) => console.log(`Error getting temperature: ${errorReason}`);

const sendMarsTemperature = (onSuccess, onError) => {
  const odds = Math.random() <= 0.6;
  const temp = getMarsTemperature();
  setTimeout(() => {
    if (odds) onSuccess(temp);
    else onError('Robot is busy');
  }, messageDelay());
};

sendMarsTemperature(temperatureInFahrenheit, handleError);
sendMarsTemperature(greet, handleError);

// EXERCÍCIO 7 - TESTE PARA VERIFICAR CALLBACK
const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

// EXERCÍO 8 - CHAMAR A FUNÇÃO getPokemonDetails
const pokemons = [
  {
    name: 'Bulbasaur',
    type: 'Grass',
    ability: 'Razor Leaf',
  },
  {
    name: 'Charmander',
    type: 'Fire',
    ability: 'Ember',
  },
  {
    name: 'Squirtle',
    type: 'Water',
    ability: 'Water Gun',
  },
];

function getPokemonDetails(filter, callback) {
  setTimeout(() => {
    if (pokemons.find(filter) === undefined) {
      return callback(new Error('Não temos esse pokémon para você :('), null);
    }
    const pokemon = pokemons.find(filter);

    const { name, type, ability } = pokemon;

    const messageFromProfOak = `Olá, seu pokémon é o ${name}, o tipo dele é ${type} e a habilidade principal dele é ${ability}`;

    callback(null, messageFromProfOak);
  }, 2000);
}

const callback = (error, msg) => {
  if (error) console.log(error);
  else console.log(msg);
};

getPokemonDetails(({ name }) => name === 'Bulbasaur', callback);

module.exports = { uppercase, getPokemonDetails };
