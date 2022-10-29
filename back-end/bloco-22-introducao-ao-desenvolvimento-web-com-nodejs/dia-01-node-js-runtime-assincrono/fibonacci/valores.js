const values = (value1, value2, value3) => {
  const promise = new Promise((resolve, reject) => {
    if (isNaN(value1) || isNaN(value2) || isNaN(value3)) {
      return reject(new Error('Informe apenas números'));
    }
    const calculate = (value1 + value2) * value3;

    if (calculate < 50) return reject(new Error('Valor muito baixo'));
    return resolve(calculate);
  });

  return promise;
};

const resolveLowValue = async () => {
  try {
    const resolve = await values(1, 2, 3);
    console.log(resolve);
  } catch(e) {
    console.error(e.message);
  }
};
resolveLowValue();

const resolveNotNumber = async () => {
  try {
    const resolve = await values('a', 20, 30);
    console.log(resolve);
  } catch(e) {
    console.error(e.message);
  }
};
resolveNotNumber();

const resolveCorrect = async () => {
  try {
    const resolve = await values(10, 20, 30);
    console.log(resolve);
  } catch(e) {
    console.error(e.message);
  }
};
resolveCorrect();