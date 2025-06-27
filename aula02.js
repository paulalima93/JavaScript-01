// ---------------------------
// Importando o módulo readline
// ---------------------------

// O 'readline' permite receber entrada de dados do usuário pelo terminal (como o input do Python)
const readline = require('readline');

// Cria uma interface para ler do teclado (input) e escrever no terminal (output)
const rl = readline.createInterface({
  input: process.stdin,   // entrada padrão (teclado)
  output: process.stdout  // saída padrão (console)
});


// ---------------------------
// EXEMPLO COMENTADO: ENTRADA SIMPLES
// ---------------------------

// rl.question faz uma pergunta ao usuário e executa uma função com a resposta
// rl.question('Qual é o seu nome? ', (nome) => {
//   console.log(`Olá, ${nome}!`); // Resposta usando template literal
//   rl.close(); // Fecha a interface de leitura
// });

// ---------------------------
// EXEMPLO: DECLARANDO E USANDO FUNÇÕES
// ---------------------------

// console.log("olá")

// O que é uma função?
// Uma função é uma "caixa de ações" ou uma tarefa que ensinamos o programa a realizar
// Podemos chamar a função várias vezes, com diferentes valores (parâmetros)

// Declaração da função comprar
function comprar(item){
    // ações dentro da função (podem ser escritas ou imaginadas)
    console.log(`Escolhendo o item: ${item}`);
    console.log(`Pagando pelo item: ${item}`);
    console.log(`Recebendo o item: ${item}`);
}

// Criando uma variável com um valor para passar como argumento
let item = "sapato";

// Chamando a função com o valor da variável
comprar(item);


// ---------------------------
// EXERCÍCIO COM SWITCH E ENTRADA DO USUÁRIO
// ---------------------------

// Aqui, usamos rl.question novamente para pedir uma vogal ao usuário
rl.question('Escolha uma vogal: ', (vogal) => {

  // O switch verifica qual valor foi digitado
  // Ele compara o valor da variável "vogal" com os "case" (casos)

  switch (vogal) {
    case "a":
        console.log("Escolheu A"); // Se a pessoa digitou "a"
        break; // Para a execução aqui
    case "e":
        console.log("Escolheu E");
        break;
    case "i":
        console.log("Escolheu I");
        break;
    case "o":
        console.log("Escolheu O");
        break;
    case "u":
        console.log("Escolheu U");
        break;
    
    // Se nenhum dos casos acima for verdadeiro, cai no default
    default:
        console.log("Não é uma vogal"); // Entrada inválida
        break;
  }

  // Fecha a interface readline depois da resposta
  rl.close();
});
