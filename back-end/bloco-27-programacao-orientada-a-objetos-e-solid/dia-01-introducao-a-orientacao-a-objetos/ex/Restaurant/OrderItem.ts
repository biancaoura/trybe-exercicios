export default class OrderItem {
  private _name: string;
  private _price: number;

  constructor (name: string, price: number) {
    this._name = name;
    this._price = price;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    if (value.length < 3) {
      throw new Error('Item name must have at least 3 characters');
    }

    this._name = value;
  }

  get price(): number {
    return this._price;
  }

  set price(value: number) {
    if (value < 0) {
      throw new Error('Price must have a positive value');
    }

    this._price = value;
  }
}