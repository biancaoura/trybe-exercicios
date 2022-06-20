const {
  sum, myRemove, myFizzBuzz, encode, decode, techList, hydrate,
} = require('./script');

describe('function sum()', () => {
  it('returns sum', () => {
    expect(sum(4, 5)).toEqual(9);
    expect(sum(0, 0)).toEqual(0);
  });
  it('returns error if parameter isNaN', () => {
    expect(() => { sum(4, '5'); }).toThrow(Error);
  });
});

describe('functin myRemove()', () => {
  it('returns expected array', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toContain(3);
    expect(myRemove([1, 2, 3, 4], 5)).not.toContain(5);
  });
  it('doesn\'t return wrong array', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toBe([1, 2, 3, 4]);
  });
});

describe('function myFizzBuzz()', () => {
  it('returns \'fizzbuzz\' if number is multiple of 3 and 5', () => {
    expect(myFizzBuzz(15)).toEqual('fizzbuzz');
  });
  it('returns \'fizz\' if number is multiple of 3', () => {
    expect(myFizzBuzz(6)).toEqual('fizz');
  });
  it('returns \'buzz\' if number is multiple of 5', () => {
    expect(myFizzBuzz(10)).toEqual('buzz');
  });
  it('returns parameter if number isn\'t multiple of 3 or 5', () => {
    expect(myFizzBuzz(2)).toEqual(2);
  });
  it('returns error if parameter isn\'t a number', () => {
    expect(myFizzBuzz('a')).toEqual(false);
  });
});

describe('functions encode(), decode()', () => {
  it('check if encode and decode are functions', () => {
    expect(typeof encode).toEqual('function');
    expect(typeof decode).toEqual('function');
  });
  it('returns converted characters (vowels and 1-5 only)', () => {
    expect(encode('sequoia')).toEqual('s2q5431');
    expect(decode('s2q5431')).toEqual('sequoia');
  });
  it('returns string with the same length as parameter', () => {
    expect(encode('sequoia').length).toEqual(7);
    expect(decode('s2q5431').length).toEqual(7);
  });
});

describe('Testa a função techList', () => {
  it('Testa se a função techList é definida', () => {
    expect(techList).toBeDefined();
  });
  it('Testa se techList é uma função', () => {
    expect(typeof techList).toBe('function');
  });
  it('Lista com 5 tecnologias deve retornar uma lista de objetos ordenados', () => {
    expect(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')).toEqual([
      {
        tech: 'CSS',
        name: 'Lucas',
      },
      {
        tech: 'HTML',
        name: 'Lucas',
      },
      {
        tech: 'JavaScript',
        name: 'Lucas',
      },
      {
        tech: 'Jest',
        name: 'Lucas',
      },
      {
        tech: 'React',
        name: 'Lucas',
      },
    ]);
  });
  it('Lista com 0 tecnologias deve retornar uma mensagem de erro "Vazio!"', () => {
    expect(techList([], 'Lucas')).toBe('Vazio!');
  });
});

describe('Testa a função hydrate', () => {
  it('Testa se a função hydrate é definida', () => {
    expect(hydrate).toBeDefined();
  });
  it('Testa se hydrate é uma função', () => {
    expect(typeof hydrate).toBe('function');
  });
  it('Ao receber uma string retorne a sugestão de quantos copos de água deve-se beber', () => {
    expect(hydrate('1 cerveja')).toBe('1 copo de água');
    expect(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho')).toBe('7 copos de água');
    expect(hydrate('2 shots de tequila, 2 cervejas e 1 corote')).toBe('5 copos de água');
    expect(hydrate('1 copo de catuaba, 1 cervejas e 1 copo de vinho')).toBe('3 copos de água');
    expect(hydrate('4 caipirinhas e 2 cervejas')).toBe('6 copos de água');
  });
});
