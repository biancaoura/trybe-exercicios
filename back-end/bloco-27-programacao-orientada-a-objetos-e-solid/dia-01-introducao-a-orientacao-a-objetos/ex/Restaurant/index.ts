import Customer from './Customer';
import Order from './Order';
import OrderItem from './OrderItem';

const customer = new Customer('Maria');

const coke = new OrderItem('coke', 1.99);
const blt = new OrderItem('BLT', 4.99);

const order = new Order(customer, [coke, blt], 'credit', 0.2);

console.log(order);
console.log(order.getTotalOrderPrice());
console.log(order.getTotalOrderPriceWithDiscount());