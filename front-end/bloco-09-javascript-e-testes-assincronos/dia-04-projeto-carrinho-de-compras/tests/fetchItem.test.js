require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  it('1 - Deve ser uma função', () => {
    expect(typeof fetchItem).toBe('function');
  });

  it('2 - Fetch deve ser chamada com o endpoint correto', async () => {
    expect.assertions(2);
    const url = 'https://api.mercadolibre.com/items/MLB1615760527';
    
    await fetchItem('MLB1615760527');
    expect(fetch).toBeCalledTimes(1);
    expect(fetch).toBeCalledWith(url);
  });

  it('3 - Deve retornar o objeto correto', async () => {
    expect.assertions(1);
    const response = await fetchItem('MLB1615760527');

    expect(response).toEqual(item);
  });

  it('4 - Deve retornar erro se nenhum argumento for passado', async () => {
    expect.assertions(1);
    try {
      await fetchItem();
    } catch (error) {
      expect(error).toEqual(new Error('You must provide an url'));
    }
  });
});
