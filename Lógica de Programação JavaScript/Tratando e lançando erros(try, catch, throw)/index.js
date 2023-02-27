function soma(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    throw new Error("x e y precisam ser números.");
  }
  return x + y;
}

try {
  console.log(soma(1, 1));
  console.log(soma("1", 2));
} catch (err) {
  //console.log(err);
  console.log("Erro!");
}
