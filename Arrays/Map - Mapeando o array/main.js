//Dobre os números

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const numerosEmDobro = numeros.map((valor) => valor * 2);
//console.log(numerosEmDobro);

// Para cada elemento:
// Retorne apenas uma string com o nome da pessoa
// Remova apenas a chave "nome" do objeto
// Adicione uma chave id em cada objeto

const pessoas = [
  { nome: "Luiz", idade: 30 },
  { nome: "João", idade: 20 },
  { nome: "Felipe", idade: 15 },
  { nome: "Carlos", idade: 24 },
  { nome: "Lula", idade: 56 },
  { nome: "Artur", idade: 43 },
];
const nomes = pessoas.map((obj) => obj.nome);
const idades = pessoas.map((obj) => obj.idade);
const comIds = pessoas.map(function (obj, index) {
  const newObj = { ...obj };
  newObj.id = index;
  return newObj;
});
console.log(comIds);
