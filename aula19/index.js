/*
Primitivos(imutáveis) - string, number, boolean, undefined, null(bigint, symbol) - valor

Referência(mutável) - array, object, function - passamos por referência 
*/

// let a = [1, 2, 3];
// let b = [...a];
// let c = b;
// console.log(a, b);

// a.push(4);
// console.log(a, b);
// b.pop();
// console.log(a, b);
// a.push("Artur");
// console.log(a, c);
// c.push(5);
// console.log(c, b);

const a = {
  nome: "Artur",
  sobrenome: "Fabio",
};

const b = {...a} ;

a.nome = 'Tafarel'
console.log(a);
console.log(b);

