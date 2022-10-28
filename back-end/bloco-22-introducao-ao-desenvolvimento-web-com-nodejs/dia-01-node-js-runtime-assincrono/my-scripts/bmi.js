const weightKg = 90;
const heightCm = 200;

const calculateBMI = (weight, height) => {
  const heightMts = height / 100;
  return weight / (heightMts ** 2);
}

const main = () => {
  const bmi = calculateBMI(weightKg, heightCm);
  console.log(`BMI: ${bmi}`);
}

main();