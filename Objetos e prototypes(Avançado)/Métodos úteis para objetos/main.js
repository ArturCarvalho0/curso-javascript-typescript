/*
Object.values(retorna os valores)
Object.entries(retorna as chaves e valores)
Object.assign(copia o objeto)
Object.getOwnPropertyDescriptor(o,"prop")
...(spread)

ja vimos 
Object.keys(retorna as chaves)
Object.freeze(congela o objeto)
Object.defineProperty(define uma propriedade)
Object.defineProperties(define várias propriedades)
*/

const produto = { nome: "Produto", preco: 1.8 };
console.log(Object.entries(produto, "nome"));