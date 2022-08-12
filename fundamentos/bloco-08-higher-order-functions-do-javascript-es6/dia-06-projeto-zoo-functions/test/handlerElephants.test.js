const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Testa se ao passar argumentos, a função retorna os valores corretos', () => {
    expect(handlerElephants('count')).toBe(4);
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
    expect(handlerElephants('averageAge')).toBe(10.5);
    expect(handlerElephants('location')).toBe('NW');
    expect(handlerElephants('popularity')).toBe(5);
    expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
  });
  it('Testa se função retorna null se argumentos não forem dados', () => {
    expect(handlerElephants('argumento')).toBe(null);
  });
  it('Testa se retorna erro se parâmetro não for string', () => {
    expect(handlerElephants(1)).toBe('Parâmetro inválido, é necessário uma string');
  });
  it('Testa se retorna undefined se não possuir argumento', () => {
    expect(handlerElephants()).toBeUndefined();
  });
});
