// String, number, undefined, null, boolean
const nome = 'Artur'; // string
const nome1 = "Artur"; // string
const nome2 = `Artur`; // string
const num1 = 10; // number
const num2 = 10.52; // number
let nomeAluno; // undefined -> não aponta pra local nenhuma na memória
const sobrenomeAluno = null; // Nulo -> não aponta pra local nenhuma na memória
const aprovado = false; // Boolean = true, false (lógico)

console.log(typeof nome)

let a = 2;
const b = a;
console.log(a, b); // 2, 2

a = 3;
console.log(a, b); // 3, 2
