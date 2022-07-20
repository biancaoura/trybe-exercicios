require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  it('1 - Deve ser uma função', () => {
    expect(typeof fetchProducts).toBe('function');
  });

  it('2 - Fetch deve ser chamada com o endpoint correto', async () => {
    expect.assertions(2);
    const url = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
    await fetchProducts('computador');

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(url);
  });

  it('3 - Deve ter o retorno correto passando "computador" como argumento', async () => {
    expect.assertions(1);
    const response = await fetchProducts('computador');

    expect(response).toEqual(computadorSearch);
  });

  it('4 - Deve retornar um erro se não passar argumento', async () => {
    expect.assertions(1);
    const failedResponse = await fetchProducts();

    expect(failedResponse).toEqual(new Error('You must provide an url'));
  });
});
