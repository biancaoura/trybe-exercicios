class Superclasse {
  constructor(public isSuper: boolean = true) {}

  public sayHello() {
    console.log('Hello World!');
  }
}

class Subclasse extends Superclasse {
  constructor() {
    super();
    this.isSuper = false;
  }
}

const myFunction = (object: Superclasse) => {
  object.sayHello();
  console.log(object.isSuper ? 'Super!' : 'Sub!');
}

const superClasse = new Superclasse();
const subClasse = new Subclasse();

myFunction(superClasse);
myFunction(subClasse);