// Aula 10 – Operadores Lógicos
// Conceito e exemplos

// ----------------------------------------
// 📚 Conceito
// ----------------------------------------
// Operadores lógicos servem para **combinar ou inverter condições**.
// Retornam sempre um valor booleano (true ou false).
// Muito usados em condicionais (`if`, `while`, etc.).

// Principais operadores lógicos:
// && → "E" lógico (AND) → true se ambos forem verdadeiros
// || → "OU" lógico (OR) → true se pelo menos um for verdadeiro
// !  → "NÃO" lógico (NOT) → inverte o valor booleano

// ----------------------------------------
// 🔹 Exemplos
// ----------------------------------------
const idade = 20;
const possuiCarteira = true;

// AND (&&)
console.log(idade >= 18 && possuiCarteira); // → true (maior de idade E possui carteira)

// OR (||)
console.log(idade < 18 || possuiCarteira); // → true (menor de idade OU possui carteira)

// NOT (!)
console.log(!possuiCarteira); // → false (inverte o valor)

// ----------------------------------------
// 🔹 Dicas
// ----------------------------------------
// - && para verificar se **todas** as condições são verdadeiras
// - || para verificar se **pelo menos uma** condição é verdadeira
// - ! para inverter booleanos, útil em flags e loops
// - Pode combinar vários operadores, mas use parênteses para claridade
// Exemplo: (idade >= 18 && possuiCarteira) || autorizacaoPais

