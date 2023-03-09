//Retorne a soma do dobro de todos os pares
// -> Filtrar pares
// -> Dobrar os valores
// -> Reduzir (somar tudo)

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const numerosParesDobrados = numeros
  .filter((valor) => valor % 2 === 0) //[2,  4,  6, 8, 10, 12, 14]
  .map((valor) => valor * 2) //[4, 8, 12, 16, 20, 24, 28]
  .reduce((ac, valor) => ac + valor);

console.log(numerosParesDobrados);
