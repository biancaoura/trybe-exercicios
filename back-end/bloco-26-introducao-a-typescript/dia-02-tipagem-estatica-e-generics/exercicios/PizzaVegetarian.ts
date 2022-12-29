import Pizza from './Pizza';
import { Vegetarian } from './PizzaFlavors';

export default interface PizzaVegetarian extends Pizza {
  flavor: Vegetarian
}