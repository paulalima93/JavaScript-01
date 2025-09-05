// ----------------------------------------------
// Aula: Try/Catch em JavaScript
// ----------------------------------------------

// ✅ O que é try/catch?
// É uma estrutura usada para capturar e tratar erros no seu código,
// impedindo que ele quebre completamente.

// Sintaxe básica:
try {
    // Código que pode gerar erro
} catch (erro) {
    // Código que trata o erro
    console.error("Erro capturado:", erro.message);
}

// ----------------------------------------------
// 🔹 Exemplo 1: Erro ao acessar propriedade de um objeto nulo
// ----------------------------------------------
const usuario = null;

try {
    console.log(usuario.nome); // Tentando acessar algo de "null"
} catch (erro) {
    console.warn("Erro ao acessar propriedade:", erro.message);
}

// ----------------------------------------------
// 🔹 Exemplo 2: JSON inválido
// ----------------------------------------------
const jsonInvalido = "{ nome: 'João' }"; // Falta aspas em "nome"

try {
    const obj = JSON.parse(jsonInvalido);
    console.log(obj.nome);
} catch (erro) {
    console.error("Erro ao converter JSON:", erro.message);
}

// ----------------------------------------------
// 🔹 Exemplo 3: Função que lança erro manualmente
// ----------------------------------------------
function dividir(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        throw new Error("Parâmetros devem ser números");
    }
    if (b === 0) {
        throw new Error("Divisão por zero não é permitida");
    }
    return a / b;
}

try {
    const resultado = dividir(10, 0);
    console.log("Resultado:", resultado);
} catch (erro) {
    console.error("Erro ao dividir:", erro.message);
}

// ----------------------------------------------
// 🔹 Exemplo 4: Combinando Regex + try/catch
// ----------------------------------------------
function validarEmail(email) {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email)) {
        throw new Error("E-mail inválido!");
    }
    return true;
}

try {
    validarEmail("usuario@dominio.com");
    console.log("E-mail válido!");
} catch (erro) {
    console.error("Erro de validação:", erro.message);
}

// ----------------------------------------------
// 🧪 Exercícios propostos:
// 1. Criar uma função que some dois números e trate se os argumentos forem inválidos
// 2. Criar uma função que valide CPF usando regex e try/catch (apenas formato)
// 3. Testar um JSON com erro e capturar o erro de parse com try/catch
