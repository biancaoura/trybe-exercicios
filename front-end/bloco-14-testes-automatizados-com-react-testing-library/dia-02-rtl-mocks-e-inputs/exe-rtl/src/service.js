const randomNumber = () => Math.floor(Math.random() * 101);

const upperCase = (string) => string.toUpperCase();

const firstLetter = (string) => string.slice(0, 1);

const concatStrings = (string1, string2) => string1.concat(string2);

const fetchDog = async () => {
  try {
    const url = 'https://dog.ceo/api/breeds/image/random';
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}

module.exports = { randomNumber, upperCase, firstLetter, concatStrings, fetchDog };
