// Declaração de função (Function hoisting)
funcao1();
function funcao1() {
  console.log("Função 1");
}

// First-class objects (Objetos de primeira classe)
// Function expression
const funcao2 = function () {
  console.log("Função 2");
};
funcao2();

// Arrow function
const funcao3 = () => {
  console.log("Função 3");
};

funcao3();

// Dentro de um objeto
const obj = {
  funcao4() {
    console.log("Função 4");
  },
};
obj.funcao4();
