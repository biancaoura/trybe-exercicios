import Pizza from './Pizza';
import { Common } from './PizzaFlavors';

export default interface PizzaCommon extends Pizza {
  flavor: Common
}