type Bird = {
  wings: 2;
  beaks: 1;
  biped: true;
};

type Sum = (x: number, y: number) => number;

type Address = {
  street: string;
  number: number;
  city: string;
}

type StateOfMatter = 'liquid' | 'solid' | 'gas';

type Id = number | string;

type OS = 'linux' | 'macOS' | 'windows';

type Vowels = 'a' | 'e' | 'i' | 'o' | 'u';

class Dog {
  name: string;
  breed: string;
  age: number;
  sex: string;

  constructor(name: string, breed: string, age: number, sex: string) {
    this.name = name;
    this.breed = breed;
    this.age = age;
    this.sex = sex;
  }

  bark(): void {
    console.log('Au au');
    
  }
}

class House {
  address: string;
  number: number;

  constructor(address: string, number: number) {
    this.address = address;
    this.number = number;
  }
}

class Flight {
  number: number;
  seat: string;
  airway: string;
  departure: Date;
  arrival: Date;

  constructor(number: number, seat: string, airway: string, departure: Date, arrival: Date) {
    this.number = number;
    this.seat = seat;
    this.airway = airway;
    this.departure = departure;
    this.arrival = arrival;
  }
}

interface Automobile {
  name: string;
  brand: string;
  color: string;
  turnOn: () => void;
  turnOff: () => void;
}

interface Feline {
  name: string;
  walk: () => void;
  eat: () => void;
}

interface Aircraft {
  model: string;
  brand: string;
  engines: number;
  turnOn: () => void;
  turnOff: () => void;
}