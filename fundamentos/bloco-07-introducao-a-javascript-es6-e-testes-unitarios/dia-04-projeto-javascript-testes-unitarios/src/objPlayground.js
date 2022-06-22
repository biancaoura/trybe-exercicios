const calculator = (number1, number2) => ({
    sum: number1 + number2,
    mult: number1 * number2,
    div: Math.floor(number1 / number2),
    sub: number1 - number2,
  });

const arrayGenerator = (type, object) => {
  if (type === 'keys') return Object.keys(object);
  if (type === 'values') return Object.values(object);
  if (type === 'entries') return Object.entries(object);
};

module.exports = { calculator, arrayGenerator };
