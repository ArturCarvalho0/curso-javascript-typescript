const pessoa = {
  nome: "Artur",
  sobrenome: "Fabio",
  idade: 19,
  endereco: {
    rua: "Rua Paraná",
    numero: 314,
  },
};

// const {nome} = pessoa;
// const{nome: n = ""} = pessoa;
const {endereco: {rua,numero}} = pessoa
console.log(rua);