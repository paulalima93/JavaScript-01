// Aula 11 – Métodos de String
// Conceito e exemplos

// ----------------------------------------
// 📚 Conceito
// ----------------------------------------
// Strings em JS são objetos de texto.  
// Métodos de string permitem **manipular, consultar e transformar** o texto facilmente.

// ----------------------------------------
// 🔹 Exemplos comuns
// ----------------------------------------
const nome = "Paula Lima";

// Tamanho da string
console.log(nome.length); // → 10

// Maiúsculas e minúsculas
console.log(nome.toUpperCase()); // → "PAULA LIMA"
console.log(nome.toLowerCase()); // → "paula lima"

// Procurar e substituir
console.log(nome.includes("Paula")); // → true
console.log(nome.replace("Paula", "Joana")); // → "Joana Lima"

// Cortar e dividir
console.log(nome.substring(0, 5)); // → "Paula" (do índice 0 até 4)
console.log(nome.split(" ")); // → ["Paula", "Lima"]

// Concatenar
console.log(nome + ", seja bem-vinda!"); // → "Paula Lima, seja bem-vinda!"
console.log(`${nome}, seja bem-vinda!`);  // → template string

// ----------------------------------------
// 🔹 Dicas
// ----------------------------------------
// - Strings são **imutáveis** → métodos não alteram a string original, retornam nova string
// - Use métodos para validar inputs, formatar nomes, mensagens, etc.
