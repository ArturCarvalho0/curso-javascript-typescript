// // Formas de criar um objeto

// const pessoa1 = new Object();
// pessoa1.nome = "Artur";
// pessoa1.sobrenome = "Carvalho";
// pessoa1.idade = 20;
// pessoa1.falarNome = function () {
//   return `${this.nome} está falando seu nome.`;
// };
// pessoa1.getDataNascimento = function () {
//   const dataAtual = new Date();
//   return dataAtual.getFullYear() - this.idade;
// };

// const pessoa2 = {
//   nome: "Artur",
//   sobrenome: "Carvalho",
// };

// //Como deletar uma chave do objeto
// delete pessoa1.nome;

// console.log(pessoa1.getDataNascimento());

// for (let chave in pessoa1) {
//   console.log(pessoa1[chave]);
// }

//////////////////////////////////////////////////////////////////////////

// Factory functions / Constructor functions / Classes
// function criaPessoa(nome, sobrenome){
//   return {
//     nome,
//     sobrenome,
//     get nomeCompleto() {
//       return `${this.nome} ${this.sobrenome}`
//     }
//   }
// }

// const p1 = criaPessoa("Artur", "Carvalho");
// console.log(p1.nomeCompleto);

function Pessoa(nome,sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  Object.freeze(this); // Não permite mais alteração nos valores
}


// {} <- this -> this
const p1 = new Pessoa("Artur", "Carvalho");
const p2 = new Pessoa("Luiz", "Miranda");
p1.nome = "Carlos";

console.log(p1);
console.log(p2);