const readline = require('readline-sync');

const calculateBMI = (weight, height) => {
  const heightMts = height / 100;
  return weight / (heightMts ** 2);
}

const main = () => {
  const weightKg = readline.questionFloat('What\'s your weight? (kg)');
  const heightCm = readline.questionInt('What\'s your height? (cm) ');

  const bmi = calculateBMI(weightKg, heightCm);
  
  console.log(`BMI: ${bmi}`);
}

main();