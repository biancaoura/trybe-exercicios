const readline = require('readline-sync');

const showFibonacci = (n) => {
  let a = 1;
  let b = 1;
  for (let i = n; n >= 0; n -= 1) {
    if (b) console.log(b);

    const temp = a;

    a += b;

    b = temp;
  }
  return b;
};

const main = () => {
  const n = readline.questionInt('Give a number: ');

  if (n < 1) {
    console.log('Number must be greater than 0');
    return;
  }
  console.log(showFibonacci(n - 2));
};

main();