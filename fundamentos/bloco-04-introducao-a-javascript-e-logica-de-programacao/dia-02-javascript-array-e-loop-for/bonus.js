let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// EXERCICIO 1

for (let i = 0; i < numbers.length; i += 1) {
    for (let j = 0; j < numbers.length - i - 1; j += 1) {
        if (numbers[j] > numbers[j + 1]) {
            let swap = numbers[j];
            numbers[j] = numbers[j + 1];
            numbers[j + 1] = swap;
        }
    }
}
console.log (numbers);

// EXERCICIO 2

for (let i = 0; i < numbers.length; i += 1) {
    for (let j = 0; j < numbers.length - i - 1; j += 1) {
        if (numbers[j] < numbers[j + 1]) {
            let swap = numbers[j];
            numbers[j] = numbers[j + 1];
            numbers[j + 1] = swap;
        }
    }
}
console.log (numbers);

// EXERCICIO 3


let multiplica = [];

for (let i = 0; i < numbers.length; i += 1) {
    if (i + 1 < numbers.length) {
        multiplica.push(numbers[i] * numbers[i + 1])
    } else {
        multiplica.push(numbers[i] * 2)
    }
}

console.log (multiplica);