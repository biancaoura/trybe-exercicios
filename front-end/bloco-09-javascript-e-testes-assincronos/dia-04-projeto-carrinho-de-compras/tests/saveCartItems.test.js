const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');
describe('3 - Teste a função saveCartItems', () => {
  it('1 - localStorage deve usar setItem', () => {
    saveCartItems('<ol><li>Item</li></ol>');
    expect(localStorage.setItem).toBeCalledTimes(1);
  });

  it('2 - Deve guardar itens corretos no localStorage', () => {
    const param = '<ol><li>Item</li></ol>';

    saveCartItems(param);
    expect(localStorage.setItem).toBeCalledWith('cartItems', param);
  });
});
