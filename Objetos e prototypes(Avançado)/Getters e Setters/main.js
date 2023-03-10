// defineProperty -> Getters e Setters
// Função Constructor
function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;

  let estoquePriv = estoque;
  Object.defineProperty(this, "estoque", {
    enumerable: true,
    configurable: true,
    get: function () {
      return estoquePriv;
    },
    set: function (valor) {
      if (typeof valor !== "number") {
        console.log("Not a number");
        return;
      }
      estoquePriv = valor;
    },
  });
}

const p1 = new Produto("Camiseta", 20, 3);
// p1.estoque = 500;
// console.log(p1.estoque);

// Função factory
function criaProduto(nome) {
  return {
    get nome() {
      return nome;
    },
    set nome(valor) {
      nome = valor;
    },
  };
}
const p2 = criaProduto("camiseta");
p2.nome = "Blusa";
console.log(p2.nome);