function mostraHora() {
  let data = new Date();

  return data.toLocaleTimeString("pt-BR");
}

const timer = setInterval(function () {
  console.log(mostraHora());
}, 1000);

setTimeout(function () {
  clearInterval(timer);
}, 10000);
