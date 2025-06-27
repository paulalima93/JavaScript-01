const { resourceUsage } = require("process");

function verificaIdade(idade) {
    if (idade >= 18) {
        return "Você é maior de idade.";
    } else {
        return "Você é menor de idade.";
    }
}

const frase = verificaIdade(20);
//console.log(frase); // "Você é maior de idade."

const frase2 = verificaIdade(15);
//console.log(frase2); // "Você é menor de idade."


function verificaIdade2(idade) {
    if (idade >= 18) return "Você é maior de idade.";
    return "Você é menor de idade.";
}
let retorno = verificaIdade2(6)
//console.log(retorno)


//=================================================================

// Função que classifica faixa etária com switch
// Objetivo:
// Criar uma função que receba a idade e retorne:
// "Criança" se for até 12 anos
// "Adolescente" se for de 13 a 17
// "Adulto" se for de 18 a 59
// "Idoso" se for 60 ou mais

// Use if para classificar e depois switch para imprimir a mensagem final baseada na faixa.

function faixaEtaria(idade) {
    let faixa = ''
    if (idade <= 12) {
        faixa = 'criança'
    } else if (idade <= 17) {
        faixa = 'adolescente'
    } else if (idade <= 59) {
        faixa = 'adulto'
    } else {
        faixa = 'idoso'
    }

    switch (faixa) {
        case 'criança': console.log('Você é uma criança!')
            break

        case 'adolescente': console.log('Você é um adolescente!')
            break

        case 'adulto': console.log('Você é um adulto!')
            break

        case 'idoso': console.log('Você é um idoso!')
            break
    }
}

let idade = 5
//console.log(faixaEtaria(idade))




// Calculadora com switch e entrada do usuário
// Enunciado:
// Crie uma função chamada calculadora() que:
// Pergunte ao usuário dois números.
// Pergunte qual operação deseja fazer: "+", "-", "*", "/"
// Use switch para realizar a operação correspondente.
// Exiba o resultado.

const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calculadora(num1, operador, num2) {
    let resultado;

    switch (operador) {
        case "+":
            resultado = num1 + num2
            break
        case "-":
            resultado = num1 - num2
            break
        case "/":
            resultado = num2 !== 0 ? num1 / num2 : "Erro: divisão por zero é inválida"
            break
        case "*":
            resultado = num1 * num2
            break
        default: resultado = 'Operação inválida'
    }

    return resultado
}


rl.question("Digite o primeiro número: ", (n1) => {
  rl.question("Digite a operação (+, -, *, /): ", (op) => {
    rl.question("Digite o segundo número: ", (n2) => {
      const num1 = parseFloat(n1)
      const num2 = parseFloat(n2)  
      const resultado = calculadora(num1, op, num2) 
      console.log("Resultado:", resultado) 
      rl.close();
    });
  });
});


//------------------------------------------------------------------
// Saudação (com entrada do usuário ou valor fixo na variável)
//Objetivo:
// Criar uma função que receba o nome de uma pessoa e o período do dia 
// (manhã, tarde, noite) e retorne uma saudação apropriada.

// Digite seu nome: Paula
// Digite o período do dia (manha/tarde/noite): tarde
// Olá, Paula! Boa tarde!

//--------------------------------------------------------------------

// Conversor de unidade com função e switch (com entrada do usuário ou valor fixo na variável)
// Objetivo:
// Criar uma função que receba um valor em centímetros e a unidade desejada:
// "m" → metros
// "km" → quilômetros
// "mm" → milímetros

// Exemplo:

// Digite o valor em cm: 150
// Digite a unidade para conversão (m/km/mm): m
// Resultado: 1.5 metros
