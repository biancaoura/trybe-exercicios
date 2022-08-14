const service = require('./service');

test('mocking function to return random int between 0 - 100', () => {  
  service.randomNumber = jest.fn().mockReturnValue(10);

  expect(service.randomNumber()).toBe(10)
  expect(service.randomNumber).toHaveBeenCalled();
  expect(service.randomNumber).toHaveBeenCalledTimes(1);
});

test('mocking function to return division of first number to second number', () => {
  service.randomNumber = jest.fn().mockImplementationOnce((a, b) => a / b);

  expect(service.randomNumber(8, 2)).toBe(4);
  expect(service.randomNumber).toHaveBeenCalled();
  expect(service.randomNumber).toHaveBeenCalledTimes(1);
  expect(service.randomNumber).toHaveBeenCalledWith(8, 2);
});

test('mocking function to multiply three given numbers', () => {
  service.randomNumber = jest.fn().mockImplementation((a, b, c) => a * b * c);

  expect(service.randomNumber(2, 3, 4)).toBe(24);
  expect(service.randomNumber).toHaveBeenCalled();
  expect(service.randomNumber).toHaveBeenCalledTimes(1);
  expect(service.randomNumber).toHaveBeenCalledWith(2, 3, 4);
});

test('mocking function to return the double value of argument', () => {
  service.randomNumber.mockReset();
  expect(service.randomNumber).toHaveBeenCalledTimes(0);

  service.randomNumber = jest.fn().mockImplementationOnce((n) => n * 2);

  expect(service.randomNumber(5)).toBe(10);
  expect(service.randomNumber).toHaveBeenCalled();
  expect(service.randomNumber).toHaveBeenCalledTimes(1);
  expect(service.randomNumber).toHaveBeenCalledWith(5);
});

test('mocking function to return string in lowercase', () => {
  // service.upperCase = jest.fn().mockImplementation((string) => string.toLowerCase());
  const mockedFirstFunction = jest.spyOn(service, 'upperCase').mockImplementation((string) => string.toLowerCase());

  expect(mockedFirstFunction('Random String')).toBe('random string');
  expect(mockedFirstFunction).toHaveBeenCalledTimes(1);
  expect(mockedFirstFunction).toHaveBeenCalledWith('Random String');
});

test('mocking function to return string\'s last letter', () => {
  const mockedSecondFunction = jest.spyOn(service, "firstLetter").mockImplementation((string) => string.slice(string.length - 1));

  expect(mockedSecondFunction('abcdefg')).toBe('g');
  expect(mockedSecondFunction).toHaveBeenCalledTimes(1);
  expect(mockedSecondFunction).toHaveBeenCalledWith('abcdefg');
});

test('mocking function to return three concatenated strings', () => {
  const mockedThirdFunction = jest.spyOn(service, 'concatStrings')
    .mockImplementation((string1, string2, string3) => string1 + string2 + string3);

  expect(mockedThirdFunction('a', 'b', 'c')).toBe('abc');
  expect(mockedThirdFunction).toHaveBeenCalledTimes(1);
  expect(mockedThirdFunction).toHaveBeenCalledWith('a', 'b', 'c');
});

test('resetting first function and checking if original implementation works', () => {
  service.upperCase.mockRestore();

  expect(service.upperCase('Uppercase')).toBe('UPPERCASE');
});

describe('testing API request', () => {
  service.fetchDog = jest.fn();
  afterEach(service.fetchDog.mockReset);
  
  test('if request was successful', async () => {
    service.fetchDog.mockResolvedValue('success');

    service.fetchDog();
    expect(service.fetchDog).toHaveBeenCalled();
    expect(service.fetchDog).toHaveBeenCalledTimes(1);
    await expect(service.fetchDog()).resolves.toBe('success');
    expect(service.fetchDog).toHaveBeenCalledTimes(2);
  });

  test('if request was rejected', async () => {
    service.fetchDog.mockRejectedValue('request failed');

    expect(service.fetchDog).toHaveBeenCalledTimes(0);
    await expect(service.fetchDog()).rejects.toBe('request failed');
    expect(service.fetchDog).toHaveBeenCalledTimes(1);
  });
});