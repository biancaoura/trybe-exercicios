/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const numbers = require('../src/numbers');

describe('2 - Implemente os casos de teste para a função `numbers`', () => {
  it('Verifica se a função `numbers` retorna `true` quando o array contém apenas números e falso caso contrário', () => {
    // fail('Teste vazio!');
    expect(numbers([1, 2, 3, 4, 5])).toBe(true);
    expect(numbers([1, 2, '3', 4, 5])).toBe(false);
    expect(numbers([1, 'a', 3])).toBe(false);
    expect(numbers([' '])).toBe(false);
  });
});
