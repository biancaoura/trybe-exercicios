// EXERCICIO 1 - NÚMERO FATORIAL

let numero = 10;

for (let i = numero - 1; i >= 1; i-= 1) {
    numero = numero * i;
}

console.log(numero);

// EXERCICIO 2 - FRASE AO CONTRÁRIO

let word = 'tryber';
let inverse = '';
 
for (let i = 0; i < word.length; i++) {
    inverse += word[word.length - 1 - i];
}

console.log (inverse);

// EXERCICIO 3 - MAIOR/MENOR FRASE DENTRO DO ARRAY

let array = ['java', 'javascript', 'python', 'html', 'css'];

// MAIOR PALAVRA

let maior = array[0];

for (let i = 0; i < array.length; i += 1) {
    if (array[i].length > maior.length) {
        maior = array[i];
    }
}

console.log(maior);

// MENOR PALAVRA

let menor = array[0];

for (let j = 0; j < array.length; j += 1) {
    if (array[j].length < menor.length) {
        menor = array[j];
    }
}

console.log(menor);

// EXERCICIO 4 - MAIOR NÚMERO PRIMO ENTRE 0-50

let primo = [];
let maiorPrimo = '';

for (let i = 2; i <= 50; i += 1) {
    let divisores = '';
    for (let j = 2; j < i; j += 1) {
        if (i % j == 0) {
            divisores += 1;
        }
    }
    if (divisores == 0) {
        primo.push(i);
    }
}

maiorPrimo = primo[primo.length - 1];

console.log(maiorPrimo);



BONUS



// EXERCICIO 1 - QUADRADO DE ASTERISCOS

let n = 5;

// METODO 1

let quadrado = '';

for (let i = 0; i < n; i += 1) { // linha
   quadrado += '*'
}

for (let j = 0; j < n; j +=1) { // coluna
    console.log(quadrado);


// METODO 2

for (let i = 0; i < n; i += 1) { // linha
    let linha = '';
    for (let j = 0; j < n; j += 1) { // coluna
        linha = linha + '*';
    }
    console.log(linha);
}

// EXERCICIO 2 - TRIÂNGULO DE ASTERISCOS

let n = 5;
let triangulo = '';

for (let linha = 1; linha <= n; linha += 1) {
    for (let coluna = 0; coluna < linha; coluna += 1) {
        triangulo += '*';
    } 
    triangulo += '\n';   
}
console.log(triangulo);

    GABARITO:

    for (let linha = 0; linha <= n; linha += 1) {
        console.log(triangulo);
        triangulo += '*';
    }

// EXERCICIO 3 - TRIÂNGULO DE ASTERISCOS INVERTIDO

let n = 5;
let triangulo = '';

for (let linha = n; linha >= 0; linha -= 1) {
    for (let coluna = 0; coluna < linha; coluna += 1) {
        triangulo += ' ';
    }
    for (let asterisco = n; asterisco > linha; asterisco -= 1) {
        triangulo += '*';
    }
    triangulo += '\n';
}
console.log(triangulo);

// EXERCICIO 4 - PIRÂMIDE DE ASTERISCOS

let n = 5;
let piramide = '';

let meio = (n + 1) / 2;

let esquerda = meio;
let direita = meio;

for (let linha = 0; linha <= meio; linha += 1) {
    for (let coluna = 0; coluna <= n; coluna += 1) {
        if (coluna > esquerda && coluna < direita) {
            piramide += '*';
        }   else {
            piramide += ' ';
        }
    }
    console.log(piramide);
    piramide = '';
    direita += 1;
    esquerda -= 1;
}
