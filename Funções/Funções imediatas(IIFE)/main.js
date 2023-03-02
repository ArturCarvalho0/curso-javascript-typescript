//IIFE -> Immediately invoked function expression
(function (idade, peso, altura) {
  const sobrenome = "Carvalho";
  function criaNome(nome) {
    return nome + " " + sobrenome;
  }
  function falaNome() {
    console.log(criaNome("Artur"));
  }
  falaNome();
  console.log(idade, peso, altura);
})(30, 70, 1.73);
