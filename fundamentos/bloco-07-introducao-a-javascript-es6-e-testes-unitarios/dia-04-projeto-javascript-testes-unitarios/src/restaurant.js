/* eslint-disable max-len */

const createMenu = (object) => {
  const obj = {
    fetchMenu: () => object,
    consumption: [],
    order: (string) => { obj.consumption.push(string); },
    pay: () => {
      const foods = Object.keys(object.food);
      const drinks = Object.keys(object.drink);
      let price = 0;
      obj.consumption.forEach((key) => {
        if (foods.includes(key)) price += object.food[key];
        if (drinks.includes(key)) price += object.drink[key];
      });
      price *= 1.1;
      return parseFloat(price.toPrecision(4));
    },
  };
  return obj;
};

module.exports = createMenu;
