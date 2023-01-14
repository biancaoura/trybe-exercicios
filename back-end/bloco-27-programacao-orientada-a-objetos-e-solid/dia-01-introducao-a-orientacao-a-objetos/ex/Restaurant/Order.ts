import Customer from './Customer';
import OrderItem from './OrderItem';

export default class Order {
  private _customer: Customer;
  private _items: OrderItem[];
  private _payment: string;
  private _discount: number;

  constructor(
    customer: Customer,
    items: OrderItem[] = [],
    payment: string,
    discount: number = 0,
  ) {
    this._customer = customer;
    this._items = items;
    this._payment = payment;
    this._discount = discount;
  }

  get customer(): Customer {
    return this._customer;
  }

  set customer(value: Customer) {
    this._customer = value;
  }

  get items(): OrderItem[] {
    return this._items;
  }

  set items(value: OrderItem[]) {
    if (value.length === 0) {
      throw new Error('You can\'t place an empty order');
    }

    this._items = value;
  }

  get payment(): string {
    return this._payment;
  }

  set payment(value: string) {
    this._payment = value;
  }

  get discount(): number {
    return this._discount;
  }

  set discount(value: number) {
    if (value < 0) {
      throw new Error('The discount can\'t be negative');
    }

    this._discount = value;
  }

  getTotalOrderPrice(): number {
    const items = this._items;
    const prices = items.map((item) => item.price);

    return prices.reduce((a, b) => a + b, 0);
  }

  getTotalOrderPriceWithDiscount(): number {
    const totalPrice = this.getTotalOrderPrice();

    return totalPrice * (1 - this._discount);
  }
}