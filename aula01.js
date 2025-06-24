// ---------------------------
// DECLARAÇÃO DE VARIÁVEIS E CONSTANTES
// ---------------------------

// let → variável com escopo de bloco (mais seguro e moderno)
let idade = 99;

// const → valor constante, não pode ser alterado depois de definido
const nome = "Paula";

// Exibe nome e idade no console (concatenação tradicional)
console.log("Nome: " + nome + " | Idade: " + idade);

// Tentar mudar o valor de uma constante gera erro:
// nome = "Tais"; // ❌ Erro! Não é possível alterar const
// console.log(nome);


// ---------------------------
// TIPOS DE DADOS EM JAVASCRIPT
// ---------------------------

// string → texto
// number → número inteiro ou decimal
// boolean → verdadeiro (true) ou falso (false)


// ---------------------------
// DIFERENÇA ENTRE VAR, LET E CONST
// ---------------------------

// var → forma antiga de declarar variáveis (pré-ES6)
// • tem escopo de função (não respeita blocos como if/for)
// • pode ser redeclarado (⚠️ cuidado com bugs)

var a = 20;
var b = 20;
var soma = a + b;

if (soma === 40) {
    console.log("É quarenta");
}

// let → forma atual recomendada para variáveis que podem mudar
// • escopo de bloco (mais seguro)
// • não pode ser redeclarado no mesmo escopo

let adulto = false;

if (adulto) {
    console.log("Pode votar");
}

// const → para valores que nunca mudarão (ex: pi, nome fixo)


// ---------------------------
// EXERCÍCIO: SISTEMA DE BOATE COM MATINÊ
// ---------------------------

// Regras:
// - entre 15 e 17 anos: matinê
// - 18 anos ou mais: boate
// - menos de 15 anos: pracinha

// Altere a idade aqui para testar:
idade = 16;

if (idade >= 15 && idade <= 17) {
    console.log("Olá " + nome + ", você pode ir na matinê!");
} else if (idade >= 18) {
    console.log(`Olá ${nome}, você pode entrar na boate!`);
} else {
    console.log("Olá " + nome + ", você vai para a pracinha brincar.");
}


// ---------------------------
// TEMPLATE LITERAL (forma moderna de escrever textos)
// ---------------------------

// Usa crase (` `) e permite inserir variáveis com ${}

const frase = `Meu nome é ${nome} e tenho ${idade} anos.`;
console.log(frase);

// Forma antiga com concatenação
const frase2 = "Meu nome é " + nome;
console.log(frase2);


// ---------------------------
// CURIOSIDADE: OPERADOR VÍRGULA (⚠️ pouco usado)
// ---------------------------

// O operador vírgula executa várias expressões e retorna apenas a última
const resultado = ("Oi", "Olá", "Bem-vindo!");
console.log(resultado); // saída: Bem-vindo!
