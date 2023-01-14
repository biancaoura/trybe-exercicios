export default class Customer {
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    if (value.length < 2) {
      throw new Error('Name must have at least 2 characters.');
    }

    this._name = value;
  }
}