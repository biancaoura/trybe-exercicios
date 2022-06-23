const createMenu = require('../src/restaurant');

describe('10 - Implemente os casos de teste e a função `createMenu`', () => {
  it('Verifica se a função `createMenu` tem o comportamento esperado', () => {
    const objetoRetornado = createMenu({ food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} });
    expect(objetoRetornado).toEqual(expect.objectContaining({fetchMenu: expect.any(Function)}));
    const objetoRetornado2 = createMenu({ food: {}, drink: {} });
    expect(objetoRetornado2.fetchMenu()).toEqual({ food: {}, drink: {}});
    expect(objetoRetornado.fetchMenu()).toEqual({ food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} });
    expect(objetoRetornado.consumption).toEqual([]);
    objetoRetornado.order('coxinha');
    expect(objetoRetornado.consumption).toEqual(['coxinha']);
    objetoRetornado.order('agua');
    objetoRetornado.order('sopa');
    expect(objetoRetornado.consumption).toEqual(['coxinha', 'agua', 'sopa']);
    objetoRetornado.order('coxinha');
    expect(objetoRetornado.consumption).toEqual(['coxinha', 'agua', 'sopa', 'coxinha']);
    expect(objetoRetornado.pay()).toBe(23.76);
  });
});
