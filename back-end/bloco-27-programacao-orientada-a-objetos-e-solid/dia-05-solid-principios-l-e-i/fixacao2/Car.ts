import IVehicle from "./IVehicle";

export default class Car implements IVehicle {
  drive(): void {
    console.log('Drive a car');
  }
  fly(): void {
    console.log('Don\'t fly');
  }
}