const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// Some todos os números(Reduce)
const total = numeros.reduce(function (acumulador, valor, indice, array) {
  acumulador += valor;
  return acumulador;
}, 0);
// console.log(total);

// Retorne um array com pares(Filter)
const pares = numeros.reduce(function (acumulador, valor, indice, array) {
  if (valor % 2 === 0) acumulador.push(valor);
  return acumulador;
}, []);
// console.log(pares);

// Retorne um array com o dobro dos valores(Map)
const dobro = numeros.reduce(function (acumulador, valor, indice, array) {
  acumulador.push(valor * 2);
  return acumulador;
}, []);
// console.log(dobro);

const pessoas = [
  { nome: "Luiz", idade: 30 },
  { nome: "João", idade: 20 },
  { nome: "Felipe", idade: 15 },
  { nome: "Carlos", idade: 24 },
  { nome: "Lula", idade: 56 },
  { nome: "Artur", idade: 43 },
];

const maisVelha = pessoas.reduce(function(acumulador, valor){
  if(acumulador.idade>valor.idade)return acumulador;
  return valor;
});

console.log(maisVelha);