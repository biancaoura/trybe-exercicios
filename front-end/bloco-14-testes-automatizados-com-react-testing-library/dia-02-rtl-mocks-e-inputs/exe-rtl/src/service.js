const randomNumber = () => Math.floor(Math.random() * 101);

const upperCase = (string) => string.toUpperCase();

const firstLetter = (string) => string.slice(0, 1);

const concatStrings = (string1, string2) => string1.concat(string2);

module.exports = { randomNumber, upperCase, firstLetter, concatStrings };
