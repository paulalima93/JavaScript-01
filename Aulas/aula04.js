// ----------------------------------------
// 🧮 Operadores Matemáticos (Aritméticos)
// ----------------------------------------
// São usados para fazer contas simples com números.

let a = 9;
let b = 12;

let soma = a + b;             // Soma: 9 + 12 = 21
let subtracao = b - a;        // Subtração: 12 - 9 = 3
let multiplicacao = a * b;    // Multiplicação: 9 * 12 = 108
let divisao = b / a;          // Divisão: 12 / 9 = 1.333...
let resto = b % a;            // Resto da divisão: 12 % 9 = 3
let potencia = a ** b;        // Potência: 9 elevado a 12 = 282429536481

console.log("Soma:", soma);
console.log("Subtração:", subtracao);
console.log("Multiplicação:", multiplicacao);
console.log("Divisão:", divisao);
console.log("Resto da divisão:", resto);
console.log("Potência:", potencia);

// ----------------------------------------
// 🔐 Operadores Lógicos
// ----------------------------------------
// Usados em condições (if) para combinar verdades.

// Situação simulada
let temCNH = false;
let temRG = true;

// Operador AND (E) - &&
// Só entra no IF se os dois forem verdadeiros
if (temCNH && temRG) {
  console.log("Documentos válidos (tem CNH e RG)");
}

// Operador OR (OU) - ||
// Entra no IF se pelo menos um for verdadeiro
if (temCNH || temRG) {
  console.log("Documento válido (tem CNH ou RG)");
}

// Operador NOT (NÃO) - !
// Inverte o valor da variável (false vira true, e vice-versa)
if (!temCNH) {
  console.log("A pessoa NÃO tem CNH");
}
if (temCNH) {
  console.log("A pessoa tem CNH");
}

// ----------------------------------------
// 🔍 Operadores Relacionais (Comparação)
// ----------------------------------------
// Comparam valores e retornam true ou false

// >   maior que
// <   menor que
// >=  maior ou igual
// <=  menor ou igual
// ==  igual em valor (pode converter tipo)
// === igual em valor E tipo (forma segura)
// !=  diferente em valor
// !== diferente em valor E tipo (forma segura)

// Exemplo:
let comparar = 5 === "5"; // false, pois os tipos são diferentes (number vs string)
console.log("5 === '5'?", comparar);

// Outro exemplo com par ou ímpar:
if (a % 2 === 0) {
  console.log(a + " é par");
} else {
  console.log(a + " é ímpar");
}


