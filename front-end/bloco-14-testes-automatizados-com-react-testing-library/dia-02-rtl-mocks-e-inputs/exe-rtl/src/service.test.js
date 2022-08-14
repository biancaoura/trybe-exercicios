const service = require('./service');

test('if function returns random int between 0 - 100', () => {  
  service.randomNumber = jest.fn().mockReturnValue(10);

  expect(service.randomNumber()).toBe(10)
  expect(service.randomNumber).toHaveBeenCalled();
  expect(service.randomNumber).toHaveBeenCalledTimes(1);
});
