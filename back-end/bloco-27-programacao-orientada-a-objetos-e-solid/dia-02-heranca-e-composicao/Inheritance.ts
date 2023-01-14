class Superclass {
  constructor(public isSuper: boolean = true) {}

  public sayHello() {
    console.log('Hello World!');
  }
}

class Subclass extends Superclass {
}

const myFunc = (object: Superclass) => {
  object.sayHello();
}

const superClass = new Superclass();
const subClass = new Subclass();

myFunc(superClass);
myFunc(subClass);