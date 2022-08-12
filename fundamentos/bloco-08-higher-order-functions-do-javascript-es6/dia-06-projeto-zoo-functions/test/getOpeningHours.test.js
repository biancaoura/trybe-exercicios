const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Se nenhum parâmetro for passado, mostra horário de todos os dias', () => {
    expect(getOpeningHours()).toEqual({
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    });
  });
  it('Se primeiro parâmetro não for um dia, lança um erro', () => {
    expect(() => getOpeningHours('february', '12:12-am')).toThrow(/The day must be valid. Example: Monday/);
  });
  describe('Testa segundo parâmetro', () => {
    it('Lança erro se abreviação não for am/pm', () => {
      expect(() => getOpeningHours('tuesday', '12:20-aa')).toThrow(/The abbreviation must be 'AM' or 'PM'/);
    });
    it('Lança erro se hora não existir', () => {
      expect(() => getOpeningHours('tuesday', '30:20-am')).toThrow(/The hour must be between 0 and 12/);
    });
    it('Lança erro se minutos não existirem', () => {
      expect(() => getOpeningHours('tuesday', '12:70-am')).toThrow(/The minutes must be between 0 and 59/);
    });
    it('Lança erro se parâmetro não for hora', () => {
      expect(() => getOpeningHours('tuesday', '12:a-am')).toThrow(/The minutes should represent a number/);
    });
  });
  it('Verifica se o zoológico está aberto ou fechado', () => {
    expect(getOpeningHours('friday', '10:10-am')).toBe('The zoo is open');
    expect(getOpeningHours('saturday', '11:00-pm')).toBe('The zoo is closed');
  });
  it('Verifica se em dias fechado mostra o status do zoológico', () => {
    expect(getOpeningHours('monday', '4:50-pm')).toBe('The zoo is closed');
  });
});
