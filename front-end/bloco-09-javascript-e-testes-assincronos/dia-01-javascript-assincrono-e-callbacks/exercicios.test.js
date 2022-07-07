const { uppercase, getPokemonDetails } = require('./exercicios.js');

it('Verify if function converts all letters to uppercase', (done) => {
  uppercase('Hello World', (result) => {
    try {
      expect(result).toBe('HELLO WORLD');
      done();
    } catch (error) {
      done(error);
    }
  });
});

// EXERCÍCIO 9 - IMPLEMENTAR TESTES P/ EX 8
describe('A função getPokemonDetails', () => {
  it('retorna erro quando procuramos um pokemon que não existe no banco de dados', (done) => {
    const expectedError = new Error('Não temos esse pokémon para você :(');
    const callback = (error, msg) => {
      expect(error).toEqual(expectedError);
      done();
    };
    getPokemonDetails(({ name }) => name === 'Articuno', callback);
  });

  it('retorna um pokemon que existe no banco de dados', (done) => {
    const expected = 'Olá, seu pokémon é o Bulbasaur, o tipo dele é Grass e a habilidade principal dele é Razor Leaf';
    const callback = (error, msg) => {
      expect(msg).toEqual(expected);
      done();
    };
    getPokemonDetails(({ name }) => name === 'Bulbasaur', callback);
  });
});

// EXERCÍCIO 10 - VER QL ORDEM IMPRIME
beforeEach(() => console.log('1 - beforeEach'));
afterEach(() => console.log('1 - afterEach'));

test('', () => console.log('1 - test'));

describe('Scoped / Nested block', () => {
  beforeEach(() => console.log('2 - beforeEach'));
  afterEach(() => console.log('2 - afterEach'));

  test('', () => console.log('2 - test'));
});
