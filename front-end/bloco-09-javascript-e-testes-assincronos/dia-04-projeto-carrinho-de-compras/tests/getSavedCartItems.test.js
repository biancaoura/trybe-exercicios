const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  it('1 - localStorage deve usar getItem', () => {
    getSavedCartItems();
    expect(localStorage.getItem).toBeCalledTimes(1);
  });

  it('2 - Deve retornar itens corretos do localStorage', () => {
    getSavedCartItems();
    expect(localStorage.getItem).toBeCalledWith('cartItems');
  });
});
