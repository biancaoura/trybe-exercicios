import readline from 'readline-sync';

type units = 'kg' | 'hg' | 'dag' | 'g' | 'dg' | 'cg' | 'mg';

enum unitValue {
  kg = 1000,
  hg = 100,
  dag = 10,
  g = 1,
  dg = 0.1,
  cg = 0.01,
  mg = 0.001,
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