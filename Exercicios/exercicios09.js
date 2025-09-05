// Aula 9 – JSON em JavaScript
// Exercícios de Fixação
// ----------------------------------------

const { json } = require("stream/consumers");

// ----------------------------------------
// 1. Crie uma string JSON representando um carro com:
// - marca, modelo, ano e disponível (booleano)
// Depois transforme em objeto JS e exiba cada propriedade no console
// ----------------------------------------



// ----------------------------------------
// 2. Crie um objeto JS com 3 frutas e seus preços.
// Transforme esse objeto em JSON e exiba a string no console
// ----------------------------------------



// ----------------------------------------
// 3. Crie uma string JSON representando 3 alunos, cada um com:
// - nome, idade e notas (array de 3 números)
// Transforme em objeto JS e calcule a média de cada aluno
// ----------------------------------------
const alunosJSON = `[
{"nome": "Andre", "idade": 10, "notas": [5,5,5]},
{"nome": "Ana", "idade": 11, "notas": [7.5,8,8.5]}
]`;

const alunos = JSON.parse(alunosJSON);
alunos.forEach((aluno) => {
    const soma = aluno.notas.reduce((acc, nota ) => acc+ nota, 0);
    const media = soma / aluno.notas.length;
    console.log("Aluno: " + aluno.nome + " - Média: " + media);
})

// ----------------------------------------
// 4. Dado um JSON de produtos, transforme em objeto JS e exiba apenas os produtos disponíveis
// JSON exemplo:
// '[{"nome":"Camiseta","preco":29.9,"disponivel":true},
//   {"nome":"Calça","preco":99.9,"disponivel":false},
//   {"nome":"Tênis","preco":199.9,"disponivel":true}]'
// ----------------------------------------



// ----------------------------------------
// 5. Crie um objeto JS com informações de um usuário (nome, email, telefone)
// Transforme em JSON e depois volte para objeto, exibindo todas as propriedades
// ----------------------------------------


