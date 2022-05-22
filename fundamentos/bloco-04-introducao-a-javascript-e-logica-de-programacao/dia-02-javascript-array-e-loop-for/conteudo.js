// ARRAY

// EXERCICIO 1

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1];

console.log(menuServices);

// EXERCICIO 2

let indexOfPortfolio = menu.indexOf('Portfólio');

console.log(indexOfPortfolio);

// EXERCICIO 3

menu.push ('Contato');

console.log(menu);

// FOR

// EXERCICIO

let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

for (let i = 0; i < groceryList.length; i += 1) {
    console.log (groceryList[i]);
}

// FOR/OF

// EXERCICIO

let names = ['João', 'Maria', 'Antônio', 'Margarida'];

for (let nome of names) {
    console.log(nome);
}