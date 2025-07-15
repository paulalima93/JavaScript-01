// ----------------------------------------------
// Aula: Expressões Regulares (Regex) em JavaScript
// ----------------------------------------------

// ✅ O que é Regex?
// Expressão Regular (Regex) é um padrão usado para buscar, validar ou substituir strings.

// 📌 Formas de declarar:
const regex1 = /abc/;             // Literal
const regex2 = new RegExp("abc"); // Usando o construtor

// ----------------------------------------------
// 🔹 Exemplos básicos de validação
// ----------------------------------------------

// Valida se a string contém exatamente 4 dígitos numéricos
const regexNumero4Digitos = /^\d{4}$/;
//console.log(regexNumero4Digitos.test("1234")); // true
//console.log(regexNumero4Digitos.test("12a4")); // false

// Validação básica de e-mail
const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//console.log(regexEmail.test("usuario@email.com")); // true
//console.log(regexEmail.test("usuario@com"));        // false

// Validação de CEP brasileiro (ex: 27525-000)
const regexCep = /^\d{5}-\d{3}$/;
//console.log(regexCep.test("27525-100")); // true
//console.log(regexCep.test("2752-100"));  // false

// ----------------------------------------------
// 🔹 Substituições e buscas
// ----------------------------------------------

// Substituindo uma palavra ofensiva por asteriscos
const frase = "Você é um idiota!";
const regexOfensiva = /idiota/i; // i = case insensitive
const fraseLimpa = frase.replace(regexOfensiva, "****");
//console.log(fraseLimpa); // "Você é um ****"

// Procurando todas as datas no formato dd/mm/yyyy
const texto = "Hoje é dia 08/07/2025. Amanhã será 09/07/2025.";
const regexDatas = /\d{2}\/\d{2}\/\d{4}/g;
//console.log(texto.match(regexDatas)); // ["08/07/2025", "09/07/2025"]

// ----------------------------------------------
// 🔹 Senhas fortes (mínimo 8 caracteres, 1 maiúscula, 1 minúscula, 1 número, 1 símbolo)
// ----------------------------------------------
// Essa expressão exige que a senha tenha:
// Pelo menos uma letra minúscula


// Pelo menos uma letra maiúscula
// Pelo menos um número
// Pelo menos um caractere especial
// No mínimo 8 caracteres no total

// Somente letras, números e os símbolos permitidos
const regexSenhaForte = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
// console.log(regexSenhaForte.test("Aa123456!")); // true
// console.log(regexSenhaForte.test("senha123"));  // false


// Símbolo	Significado	                        Exemplo
// \d	    Qualquer dígito (0 a 9)	            /\d\d\d/ → "123"
// \w	    Qualquer caractere de palavra	    /\w+/ → "teste_123"
// .	    Qualquer caractere (exceto \n)	    /t.ste/ → "teste", "taste"
// ^	    Início da string	                /^oi/ → "oi tudo bem?"
// $	    Fim da string	                    /fim$/ → "acabou fim"
// +	    Um ou mais	                        /a+/ → "aaaa"
// *	    Zero ou mais	                    /a*/ → "", "aa"
// ?	    Zero ou um	                        /oi?/ → "o", "oi"
// []	    Conjunto de caracteres	            /[aeiou]/
// {}	    Quantidade	                        /\d{5}-\d{3}/ → CEP

// ----------------------------------------------
// 🧪 Exercícios propostos:
// 1. Criar regex que valide telefones no formato (99) 99999-9999
const regextel = /^\d{2}\s\d{5}-\d{4}$/;
console.log(regextel.test("15 99781-7243"))

// 2. Criar regex que valide nomes que tenham pelo menos 2 palavras
const regexname = /^[A-Za-zÀ-ÿ]+(?:\s+[A-Za-zÀ-ÿ]+)+$/
console.log(regexname.test("Taís Santos"));