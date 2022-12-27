import readline from 'readline-sync';

type units = 'km' | 'hm' | 'dam' | 'm' | 'dm' | 'cm' | 'mm';

enum unitValue {
  km = 1000,
  hm = 100,
  dam = 10,
  m = 1,
  dm = 0.1,
  cm = 0.01,
  mm = 0.001,
}

const convert = (value: number, fromUnit: units, toUnit: units): number =>
  (value * unitValue[fromUnit]) / unitValue[toUnit];

const exec = (): void => {
  const value: number = readline.questionFloat('Valor a ser convertido: ');
  const fromUnit: string = readline.question('Unidade base: ');
  const toUnit: string = readline.question('Unidade para conversão: ');

  const converted = convert(value, fromUnit as units, toUnit as units);
  console.log(converted);
};

exec();

export default exec;