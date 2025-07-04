const { resourceUsage } = require("process");
const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//somar
function somar(){
    let resultado
    rl.question("Digite um numero", (num1) =>{
        rl.question("digite o segundo numero", (num2)=>{
            resultado = parseFloat(num1) + parseFloat(num2)
            console.log(resultado)
            rl.close()
        })
    })
}

console.log(somar())

//subtrair


//multiplicar


//dividir


// Acesso ao sistema
// Peça login e senha. Só permita acesso se login === "admin" e senha === "1234".