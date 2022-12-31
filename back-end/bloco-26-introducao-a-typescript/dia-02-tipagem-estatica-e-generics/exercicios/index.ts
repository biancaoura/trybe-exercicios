import Car from './Car';
import PizzaCommon from './PizzaCommon';
import PizzaVegetarian from './PizzaVegetarian';
import PizzaDessert from './PizzaDessert';

const gol = new Car('Volkswagen', 'silver', 4);

gol.turnOn();
gol.speedUp();
gol.speedDown();
gol.turn('left');
gol.speedUp();
gol.speedDown();
gol.turn('right');
gol.turn('right');
gol.stop();
gol.speedUp();
gol.speedDown();
gol.turn('right');
gol.turn('left');
gol.speedUp();
gol.speedDown();
gol.turn('right');
gol.speedDown();
gol.stop();

const calabresa: PizzaCommon = {
  flavor: 'Calabresa',
  slices: 8
};

const marguerita: PizzaVegetarian = {
  flavor: 'Marguerita',
  slices: 6
};

const nutella: PizzaDessert = {
  flavor: 'Nutella',
  slices: 4
};

console.log(calabresa, marguerita, nutella);