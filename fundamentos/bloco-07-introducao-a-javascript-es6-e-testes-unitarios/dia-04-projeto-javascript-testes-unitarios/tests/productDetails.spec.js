const productDetails = require('../src/productDetails');

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    const products = productDetails('arroz', 'feijão');
    expect(typeof productDetails).toBe('function');
    const isArr = Array.isArray(products);
    expect(isArr).toBeTruthy();
    expect(products.length).toBe(2);
    const isObj = (el) => typeof el === 'object';
    expect(products.every(isObj)).toBeTruthy();
    expect(products[0] !== products[1]).toBeTruthy();
    const prod1 = products[0].details.productId.match(/123$/);
    const prod2 = products[1].details.productId.match(/123$/);
    expect(prod1 && prod2).toBeTruthy();
  });
});
