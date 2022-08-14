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