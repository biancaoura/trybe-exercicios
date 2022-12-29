export default class Car {
  brand: string;
  color: string;
  doors: number;

  constructor(brand: string, color: string, doors: number) {
    this.brand = brand;
    this.color = color;
    this.doors = doors;
  }

  honk(): void { console.log('Honk!') };

  turnOn(): void { console.log('Car is on') };

  turnOff(): void { console.log('Car if off') };

  speedUp(): void { console.log('Speeding up') };

  speedDown(): void { console.log('Slowing down') };

  stop(): void { console.log('Car stopped') };

  turn(direction: string): void { console.log(`Turning ${direction}`) };
}