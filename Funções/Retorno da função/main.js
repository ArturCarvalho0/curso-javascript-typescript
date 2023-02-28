//return
//retorna um valor
//Termina a função
function soma(a, b) {
  return a + b;
}

function criaPessoa(nome, sobrenome) {
  return { nome, sobrenome };
}

const pessoa1 = criaPessoa("João", "Silva");
const pessoa2 = criaPessoa("Artur", "Carvalho");

console.log(pessoa1);
console.log(pessoa2);

function falaFrase(comeco) {
  function falaResto(resto) {
    return comeco + " " + resto;
  }
  return falaResto;
}

const olaMundo = falaFrase("Olá");
const resto = olaMundo("Mundo");

function criaMultiplicador(multiplicador) {
  return function (valor) {
    return valor * multiplicador;
  };
}
const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(2))
console.log(triplica(2))
console.log(quadriplica(2))

