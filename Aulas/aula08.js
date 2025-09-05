// ----------------------------------------
// 📚 Funções em JavaScript — Conceito
// ----------------------------------------
// Função = um bloco de código nomeado (ou não) que executa uma tarefa.
// Vantagens: reutilização, organização, legibilidade e testes.
// Regras/dicas:
// - Declarar: diz ao JS "existe uma tarefa com este nome".
// - Chamar (invocar): executa a tarefa (usa parênteses).
// - Nomeie funções com verbos no infinitivo: "calcularTotal", "buscarUsuario", etc.

// Declaração de função (function declaration)
function saudacao() {
  // Corpo da função: tudo aqui só roda quando a função é CHAMADA.
  console.log("Olá! Seja bem-vindo ao curso de JavaScript.");
}

// Chamada (invocação). Sem os parênteses, NADA é executado.
saudacao(); // → "Olá! Seja bem-vindo ao curso de JavaScript."


// ----------------------------------------
// 🔹 Parâmetros e Argumentos
// ----------------------------------------
// Parâmetros: variáveis listadas na definição da função.
// Argumentos: valores reais passados na CHAMADA da função.
// Dicas:
// - Dê nomes claros aos parâmetros.
// - Você pode definir VALORES PADRÃO para evitar "undefined".
// - Valide tipos quando necessário (ex.: Number, String).

function apresentar(nome, idade = 0) {
  // `nome` e `idade` são PARÂMETROS.
  // `idade = 0` é um valor padrão caso não seja informado.
  console.log(`Meu nome é ${nome} e tenho ${idade} anos.`);
}

// Aqui "Paula" e 28 são ARGUMENTOS.
apresentar("Paula", 98); // → "Meu nome é Paula e tenho 98 anos."
apresentar("João");      // → "Meu nome é João e tenho 0 anos." (usou valor padrão)

// ----------------------------------------
// 🔸 Funções com Retorno (return)
// ----------------------------------------
// `return` devolve um valor para quem chamou a função e ENCERRA a execução da função.
// Diferença importante: `console.log` apenas IMPRIME; `return` DEVOLVE um valor.
// Você pode salvar o valor retornado em uma variável para usar depois.

function somar(a, b) {
  // (Boas práticas) Converta/valide os tipos se necessário:
  const n1 = Number(a);
  const n2 = Number(b);

  // "Early return": sair cedo se algo estiver errado.
  if (!Number.isFinite(n1) || !Number.isFinite(n2)) {
    return NaN; // ou lance um erro, conforme o caso
  }

  return n1 + n2; // Depois de `return`, nada mais é executado na função.
}

const totalSoma = somar(5, 7);
console.log("Resultado da soma:", totalSoma); // → 12

// Se você esquecer de capturar o retorno, perde o valor:
somar(10, 20); // nada é exibido, pois não imprimimos; apenas retornou 30.

// ----------------------------------------
// 🔹 Retornando "vários valores"
// ----------------------------------------
// Uma função só retorna UM valor. Para devolver "vários", coloque-os em um OBJETO (mais claro)
// ou em um ARRAY (mais enxuto). Objetos são preferíveis pois trazem rótulos (chaves).

function dividir(dividendo, divisor) {
  if (divisor === 0) {
    return { ok: false, erro: "Divisão por zero não é permitida." };
  }
  const quociente = Math.floor(dividendo / divisor);
  const resto = dividendo % divisor;
  return { ok: true, quociente, resto };
}

const resultadoDiv = dividir(17, 5);
if (resultadoDiv.ok) {
  console.log(`Quociente: ${resultadoDiv.quociente}, Resto: ${resultadoDiv.resto}`);
} else {
  console.log("Erro:", resultadoDiv.erro);
}

// ----------------------------------------
// 🧩 Função como Valor (Função de Primeira Classe)
// ----------------------------------------
// Em JS, funções são "cidadãs de primeira classe":
// - Podem ser atribuídas a variáveis
// - Podem ser passadas como argumento
// - Podem ser retornadas por outras funções

// Expressão de função (function expression) atribuída a uma constante:
const dobrar = function (n) {
  return n * 2;
};

console.log(dobrar(9)); // → 18

// Arrow function (sintaxe curta). Equivalente ao acima:
const triplicar = (n) => n * 3;

console.log(triplicar(7)); // → 21

// ----------------------------------------
// 🔁 Funções de Callback (sincrônicas)
// ----------------------------------------
// Callback = função passada como argumento para ser executada dentro de outra.
// Útil para customizar um "ponto de extensão": a função principal chama o callback
// em determinado momento com dados que você define.

function executarOperacao(a, b, operacao) {
  // `operacao` é um callback: esperamos que seja uma função (a, b) => algo
  if (typeof operacao !== "function") {
    return NaN;
  }
  return operacao(a, b);
}

// Callbacks nomeados:
function somarCb(x, y) { return x + y; }
function multiplicarCb(x, y) { return x * y; }

console.log(executarOperacao(3, 4, somarCb));        // → 7
console.log(executarOperacao(3, 4, multiplicarCb));  // → 12

// Callback anônimo (arrow) diretamente na chamada:
console.log(executarOperacao(10, 5, (x, y) => x - y)); // → 5

// ----------------------------------------
// ⏳ Funções de Callback (assíncronas)
// ----------------------------------------
// Em operações assíncronas (ex.: ler arquivo, acessar rede, timers),
// o callback é chamado FUTURAMENTE, quando o dado ficar pronto.
// Demonstração com setTimeout (simula algo "demorado"):

console.log("Início");

setTimeout(() => {
  console.log("Rodou depois de 500ms (callback assíncrono).");
}, 500);

console.log("Fim");
// Ordem de saída:
// 1) "Início"
// 2) "Fim"
// 3) "Rodou depois de 500ms ..."  (porque o callback roda depois do tempo)

// ----------------------------------------
// 🧠 Extras úteis sobre funções
// ----------------------------------------
// Escopo: variáveis criadas dentro da função não "vazam" para fora.
// Hoisting: declarações `function nome(){}` são içadas (você pode chamá-las antes de declarar).
// Já expressões de função (const f = function(){}) NÃO são içadas da mesma forma.
// Side effects: funções que alteram algo fora delas (ex.: variável global, DOM). Prefira funções puras quando possível.
// Dica: Retorno ≠ Impressão. Use `return` para DEVOLVER dados e `console.log` apenas para visualizar.
// Dica: Valide parâmetros e use "early return" para deixar o fluxo claro.


