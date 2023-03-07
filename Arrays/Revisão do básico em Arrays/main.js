//const nomes = new Array("Artur","José","Pedro") //forma com construtor
//delete nomes[2];
//apaga um elemento do nosso array sem que o índice seja apagado junto 
//valor por referencia 
//const novo = [...nomes] // forma de copiar os valores de uma array sem referencia 
// .pop() remove e retorna o ultimo elemento do array
// .shift() remove e retorna o primeiro elemento do array
// .push() adiciona um elemento no final do array 
// .unshift() adiciona um elemento no começo do array
// .slice() recorta e retorna os elementos recortados
// .split() separa os elementos pelo parâmetro passado
// .join() junta os elementos pelo parâmetro passado



const nomes = ["Artur","José","Pedro","Carlos","Leonardo","Rafael"]
console.log(nomes.length)

const nome = "Artur Fabio Oliveira Carvalho"
const nomeSeparado = nome.split(" ");//separando os nomes por espaço
console.log(nomeSeparado)