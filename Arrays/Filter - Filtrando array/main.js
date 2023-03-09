//Filter - Sempre retornar um array, com a mesma quantidade de elementos ou menos

// Retorne os números maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosFiltrados = numeros.filter((valor) => valor > 10);
console.log(numerosFiltrados);

//Retorne as pessoas que tem o nme com 5 letras ou mais
//Retorne as pessoas com mais de 50 anos
//retorne as pessoas cujo nome termina com a
const pessoas = [
  { nome: "Luiz", idade: 30 },
  { nome: "João", idade: 20 },
  { nome: "Felipe", idade: 15 },
  { nome: "Carlos", idade: 24 },
  { nome: "Lula", idade: 56 },
  { nome: "Artur", idade: 43 },
];

const pessoasComNomeGrande = pessoas.filter((obj) => obj.nome.length >= 5);
const pessoasComMaisDeCinquentaAnos = pessoas.filter((obj) => obj.idade > 50);
const nomeTerminaComA = pessoas.filter((obj) => {
  return obj.nome.toLocaleLowerCase().endsWith("a");
});
console.log(nomeTerminaComA);
