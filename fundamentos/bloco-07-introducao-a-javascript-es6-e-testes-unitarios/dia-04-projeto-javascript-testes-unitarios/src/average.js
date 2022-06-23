const average = (array) => {
  if (array.length < 1) { return undefined; }
  const newArr = [];
  for (let i = 0; i < array.length; i += 1) {
    if (typeof array[i] !== 'number') { return undefined; }
    newArr.push(Math.round(array[i]));
  }
  return Math.round(newArr.reduce((a, b) => a + b) / (newArr.length));
};
module.exports = average;
