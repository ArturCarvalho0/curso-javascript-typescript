function retornaFuncao(nome) {
  return function () {
    return nome;
  };
}

const funcao = retornaFuncao("Artur");
const funcao2 = retornaFuncao("José");
console.dir(funcao);
console.dir(funcao2);
