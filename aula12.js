// Aula 12 – Métodos de Math
// Conceito e exemplos

// ----------------------------------------
// 📚 Conceito
// ----------------------------------------
// O objeto Math fornece **funções e constantes matemáticas**.
// Não se cria instâncias de Math, usamos diretamente como Math.metodo().

// ----------------------------------------
// 🔹 Exemplos úteis
// ----------------------------------------
console.log(Math.PI);     // → 3.141592653589793
console.log(Math.E);      // → 2.718281828459045

// Arredondamento
console.log(Math.round(4.7)); // → 5 (arredonda para o inteiro mais próximo)
console.log(Math.floor(4.7)); // → 4 (arredonda para baixo)
console.log(Math.ceil(4.2));  // → 5 (arredonda para cima)

// Números aleatórios
console.log(Math.random()); // → número aleatório entre 0 e 1
console.log(Math.floor(Math.random() * 10)); // → número inteiro de 0 a 9

// Potência e raiz
console.log(Math.pow(2, 3)); // → 8 (2^3)
console.log(Math.sqrt(25));  // → 5

// Valor absoluto
console.log(Math.abs(-10)); // → 10

// Máximo e mínimo
console.log(Math.max(3, 7, 1)); // → 7
console.log(Math.min(3, 7, 1)); // → 1

// ----------------------------------------
// 🔹 Dicas
// ----------------------------------------
// - Use Math.random() para jogos, sorteios e simulações
// - Combine Math.floor() com Math.random() para gerar números inteiros
// - Math é muito útil para cálculos financeiros, físicos ou gráficos
