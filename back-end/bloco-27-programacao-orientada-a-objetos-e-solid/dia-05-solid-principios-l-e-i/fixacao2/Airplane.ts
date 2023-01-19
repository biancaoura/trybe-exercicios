import IVehicle from "./IVehicle";

export default class Airplane implements IVehicle {
  drive(): void {
    console.log('Don\'t drive');
  }
  fly(): void {
    console.log('Flying a plane');
  }
}