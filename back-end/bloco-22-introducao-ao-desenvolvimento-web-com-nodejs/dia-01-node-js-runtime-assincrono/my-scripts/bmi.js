const readline = require('readline-sync');

const calculateBMI = (weight, height) => {
  const heightMts = height / 100;
  return (weight / (heightMts ** 2)).toFixed(2);
};

const classificateWeight = (bmi) => {
  switch (true) {
    case (bmi < 18.5):
      return 'underweight';
    case bmi >= 18.5 && bmi <= 24.9:
      return 'normal weight';
    case bmi >= 25 && bmi <= 29.9:
      return 'overweight';
    case (bmi >= 30 && bmi <= 34.9):
      return 'class I obesity';
    case bmi >= 35 && bmi <= 39.9:
      return 'class II obesity';
    case bmi >= 40:
      return 'class III obesity';
    default:
      return 'enter bmi';
  }
};

const main = () => {
  const weightKg = readline.questionFloat('What\'s your weight? (kg)');
  const heightCm = readline.questionInt('What\'s your height? (cm) ');

  const bmi = calculateBMI(weightKg, heightCm);
  const classification = classificateWeight(bmi);

  console.log(`BMI: ${bmi} \n${classification}`);
};

main();