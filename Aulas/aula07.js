// ----------------------------------------
// 📚 Arrays em JavaScript
// ----------------------------------------
// Arrays são listas ordenadas que armazenam vários valores em uma única variável.

// Criando um array de frutas
let frutas = ["maçã", "banana", "uva", "laranja"];

// Acessando elementos pelo índice
console.log(frutas[0]); // "maçã" (índice 0)
console.log(frutas[2]); // "uva" (índice 2)

// Verificando o tamanho do array
console.log("Total de frutas:", frutas.length); // 4

// Adicionando um item ao final do array
frutas.push("melancia");
console.log(frutas); // ["maçã", "banana", "uva", "laranja", "melancia"]

// Removendo o último item
frutas.pop();
console.log(frutas); // ["maçã", "banana", "uva", "laranja"]

//  Removendo o primeiro item do array
frutas = ["maçã", "banana", "uva", "laranja"];
frutas.shift();
console.log(frutas); // ["banana", "uva", "laranja"]

// Adicionando um item no início do array
frutas.unshift("abacaxi");
console.log(frutas); // ["abacaxi", "banana", "uva", "laranja"]

// Verificando se um item está no array
console.log(frutas.includes("uva")); // true
console.log(frutas.includes("melancia")); // false

// Descobrindo o índice de um item
console.log(frutas.indexOf("banana")); // 1
console.log(frutas.indexOf("melancia")); // -1 (não encontrado)

// Cortando um pedaço do array (sem alterar o original)
let frutasFavoritas = frutas.slice(1, 3);
console.log(frutasFavoritas); // ["banana", "uva"]
console.log(frutas); // ["abacaxi", "banana", "uva", "laranja"]

// Removendo ou substituindo itens (altera o array original)
frutas.splice(1, 2); // remove 2 itens a partir do índice 1
console.log(frutas); // ["abacaxi", "laranja"]

// Juntando todos os itens em uma string
let frase = frutas.join(", ");
console.log(frase); // "abacaxi, laranja"

// Revertendo a ordem dos itens
frutas.reverse();
console.log(frutas); // ["laranja", "abacaxi"]

// Ordenando os itens em ordem alfabética
frutas.sort();
console.log(frutas); // ["abacaxi", "laranja"]

// ----------------------------------------
// 🔁 Usando o loop FOR com arrays
// ----------------------------------------
// Podemos percorrer todos os itens de um array com o FOR

let nomes = ["Ana", "Carlos", "Julia", "Bruno"];

for (let i = 0; i < nomes.length; i++) {
  console.log("Nome:", nomes[i]);
}
// 🧠 i começa em 0 e vai até o último índice (nomes.length - 1)


// ----------------------------------------
// 🧮 Somando os elementos de um array numérico
// ----------------------------------------

let numeros = [10, 20, 30, 40];
let soma = 0;

for (let i = 0; i < numeros.length; i++) {
  soma += numeros[i]; // soma = soma + numeros[i]
}

console.log("Soma total:", soma); // 100

// ----------------------------------------
// 🔍 Exibindo apenas números pares do array
// ----------------------------------------

let lista = [3, 8, 15, 22, 9, 10];

for (let i = 0; i < lista.length; i++) {
  if (lista[i] % 2 === 0) {
    console.log("Número par:", lista[i]);
  }
}

// ----------------------------------------
// ✏️ Criando mensagens personalizadas com um array
// ----------------------------------------

let linguagens = ["JavaScript", "Python", "C++", "Java"];

for (let i = 0; i < linguagens.length; i++) {
  console.log("Eu estou aprendendo " + linguagens[i]);
}

// ----------------------------------------
// 📊 Calculando média de notas com array
// ----------------------------------------

let notas = [7, 8.5, 9, 6.5];
let total = 0;

for (let i = 0; i < notas.length; i++) {
  total += notas[i];
}

let media = total / notas.length;
console.log("Média final:", media);
