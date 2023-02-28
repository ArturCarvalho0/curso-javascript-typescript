// function possui uma variável especial que sustenta todos os argumentos enviados
function funcao() {
  let total = 0;
  for (argumento of arguments) {
    total += argumento;
  }
  console.log(total);
}

funcao(1, 2, 3, 4, 5, 6, 7);

// nessa função caso os parâmetros não sejam enviados será dado o valor undefined e caso o parâmetro passado seja undefined ela vai assumir o valor padrão
function funcaoSoma(a, b = 2, c = 3) {
  console.log(a + b + c);
}

funcaoSoma(1);

// função via desestruturação
function funcaoDestru({ nome, sobrenome, idade }) {
  console.log(nome, sobrenome, idade);
}

funcaoDestru({ nome: "Artur", sobrenome: "Carvalho", idade: 20 });

// função utilzando rest operator assim quando o restante dos parâmetros nao couberem entram no rest e o rest sempre tem que ser o ultimo dos parâmetros
function conta(operador, acumulador, ...numeros){
  for (let numero of numeros) {
    if(operador === "+")acumulador += numero;
    if(operador === "-")acumulador -= numero;
    if(operador === "/")acumulador /= numero;
    if(operador === "*")acumulador *= numero;
  }
  console.log(acumulador);
}

conta("+", 1, 1, 2, 3, 4, 5, 6, 7, 8, 9);
