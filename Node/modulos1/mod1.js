// const nome = "Artur";
// const sobrenome = "Carvalho";
// const falaNome = () => nome + " " + sobrenome;
// // module.exports.nome = nome;
// // module.exports.sobrenome = sobrenome;
// // module.exports.falaNome = falaNome;

// exports.nome = nome;
// exports.sobrenome = sobrenome;
// exports.falaNome = falaNome;
// this.qualquerCoisa = "O que eu quiser exportar";

class Pessoa {
  constructor(nome) {
    this.nome = nome;
  }
}
const nome = "Artur";
const sobrenome = "Carvalho";

module.exports = {
  nome,
  sobrenome,
  Pessoa,
};
