// ----------------------------------------
// 🔁 Laço FOR – Repetição com controle fixo
// ----------------------------------------
// Executa um bloco de código um número conhecido de vezes.

for (let i = 0; i < 5; i++) {
  console.log("Número: " + i);
}
// Começa em 0, vai até 4 (enquanto i < 5), incrementando de 1 em 1.

for (let i = 1; i <= 6; i++) {
  console.log("Número: " + i);
}
// Começa em 1 e vai até 6 (inclusive), útil quando se quer controle direto do intervalo.

console.log("=====================================================");

// ----------------------------------------
// 🔄 Laço WHILE – Verifica a condição antes de executar
// ----------------------------------------
// Continua executando enquanto a condição for verdadeira.

let count = 0;

while (count < 5) {
  console.log("Contando: " + count);
  count++;
}
// Enquanto `count` for menor que 5, executa o bloco.
// Ideal quando não sabemos exatamente quantas vezes será repetido.

console.log("=====================================================");


// ----------------------------------------
// 🔁 Laço DO...WHILE – Executa primeiro, verifica depois
// ----------------------------------------
// Garante pelo menos uma execução, mesmo se a condição for falsa.

let check = 10;

do {
  console.log("Checando: " + check);
  check++;
} while (check < 5);
// Mesmo com a condição falsa (10 não é menor que 5), o bloco executa 1 vez.
// Útil para menus e interações que precisam ocorrer ao menos uma vez.

