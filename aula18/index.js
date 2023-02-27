// const pessoa1 = {
//   nome: "Artur",
//   sobrenome: "Carvalho",
//   idade: 19,
// };

// console.log(pessoa1.nome);

function criaPessoa(nome, sobrenome, idade) {
  return {
    nome,
    sobrenome,
    idade,

    fala() {
      console.log(`A minha idade atual é ${this.idade}.`);
    },

    incrementaIdade() {
      this.idade++;
    },
  };
}

const pessoa1 = criaPessoa("Artur", "Carvalho", 19);
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
