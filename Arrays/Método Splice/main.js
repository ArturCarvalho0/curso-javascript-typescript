//nomes.splice(indice, delete, elem1, elem2, elem3)

const nomes = ["Artur", "José", "Pedro", "Carlos", "Leonardo", "Rafael"];
const removidos = nomes.splice(3, 2, "Luiza");
console.log(nomes, removidos);


// pop 
// const removidos = nomes.splice(-1,1);
// shift
// const removidos = nomes.splice(0,1);
// push 
// nomes.splice(nomes.length, 0, "Luiz")
// unshift 
// nomes.splice(0,0, "Luiz") 

