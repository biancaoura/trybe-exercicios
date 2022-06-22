/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const circle = require('../src/circle');

describe('4 - Implemente os casos de teste para a função `circle`', () => {
  it('Verifica se ao receber um raio, a função `circle` retorna um objeto contendo os valores esperados', () => {
    expect(circle('número')).toBeUndefined();
    expect(typeof circle(5)).toBe('object');
    expect(Object.keys(circle(5)).length).toBe(3);
    expect(circle()).toBeUndefined();
    expect(circle(2).circumference).toBeCloseTo(12.56);
    expect(circle(3).area).toBeCloseTo(28.26, 2);
    expect(circle(3)).toEqual({ radius: 3, area: 28.259999999999998, circumference: 18.84 });
  });
});
