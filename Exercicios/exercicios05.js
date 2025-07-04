const { resourceUsage } = require("process");
const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// 1. Contator de parse (for)
// Imprima no console todos os numeros pares no intevalo de 2 numeros

// if (a % 2 === 0) {
//   console.log(a + " é par");

for(let i=2; i <= 10;i++ ){
    if (i % 2 === 0) 
    console.log(i + ' É par')
}

//2. Menu de opções ( do...while)
// Opções: 1. ver saldo; 2. sacar; 3. sair


//3. Login (while)
// Faça um sistema de login que repita até a pessoa acertar a senha
