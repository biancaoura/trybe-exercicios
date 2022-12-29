import Pizza from './Pizza';
import { Dessert } from './PizzaFlavors';

export default interface PizzaDessert extends Pizza {
  flavor: Dessert,
  slices: 4
}