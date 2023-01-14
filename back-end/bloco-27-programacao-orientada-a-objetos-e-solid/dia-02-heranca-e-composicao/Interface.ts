interface MyInterface {
  myNumber: number;

  myFunc(myParam: number): string;
}

class MyClass implements MyInterface {
  constructor(public myNumber: number) {}

  myFunc(myParam: number): string {
    const sum = this.myNumber + myParam;
    return `Sum: ${sum}`;
  }
}

const myTest = new MyClass(2);

console.log(myTest.myNumber);
console.log(myTest.myFunc(10));