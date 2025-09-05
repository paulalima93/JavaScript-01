// Aula 9 – JSON em JavaScript
// Conceito

// ----------------------------------------
// 📚 O que é JSON
// ----------------------------------------
// JSON = JavaScript Object Notation
// É um **formato de texto** para armazenar e transmitir dados de forma estruturada.
// Muito usado para enviar dados entre **front-end e back-end** (ex.: APIs).

// JSON parece um objeto JS, mas é **uma string**:
// - Chaves (keys) sempre entre aspas
// - Valores podem ser strings, números, booleanos, arrays ou objetos
// - Não pode ter funções ou variáveis indefinidas

const pessoaJSON = `{
  "nome": "Paula",
  "idade": 98,
  "ativo": true,
  "cursos": ["JavaScript", "Python", "Java"]
}`;

// Observação: JSON é **texto**, não objeto! Para usar como objeto, precisamos converter.
// ----------------------------------------
// 🔹 Convertendo JSON para objeto (parse)
// ----------------------------------------
// `JSON.parse()` transforma uma string JSON em objeto JS
const pessoaObj = JSON.parse(pessoaJSON);
console.log(pessoaObj.nome);   // → "Paula"
console.log(pessoaObj.cursos[1]); // → "Python"

// Agora você pode acessar e manipular os dados normalmente
pessoaObj.idade += 1;
console.log(pessoaObj.idade); // → 29

// ----------------------------------------
// 🔹 Convertendo objeto para JSON (stringify)
// ----------------------------------------
// `JSON.stringify()` transforma um objeto JS em string JSON
const objJS = { nome: "João", idade: 35, ativo: false };
const objJSON = JSON.stringify(objJS);
console.log(objJSON); // → '{"nome":"João","idade":35,"ativo":false}'

// Útil para **enviar dados para APIs** ou salvar localStorage

// ----------------------------------------
// 🔹 JSON com arrays e objetos aninhados
// ----------------------------------------
const dadosJSON = `{
  "usuarios": [
    { "nome": "Ana", "idade": 22 },
    { "nome": "Carlos", "idade": 30 },
    { "nome": "Maria", "idade": 27 }
  ]
}`;

const dadosObj = JSON.parse(dadosJSON);
console.log(dadosObj.usuarios[0].nome); // → "Ana"
console.log(dadosObj.usuarios.length);  // → 3

// ----------------------------------------
// 🔹 Dicas importantes
// ----------------------------------------
// - JSON = texto, não objeto
// - Use JSON.parse() para **ler/usar** dados JSON
// - Use JSON.stringify() para **enviar/salvar** objetos como JSON
// - Sempre que possível, valide dados antes de parsear
// - JSON não suporta funções, undefined ou comentários