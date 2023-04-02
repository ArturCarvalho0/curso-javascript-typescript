// CRUD -> Create,    Read,    Update,    Delete
//         Criar      Ler      Atualizar  Apagar
//         Post       Get      Put        Delete
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send(`
  <form method="post" action="/">
    Nome: <input type="text" name="nome">
    <button>send</button>
  </form>
  `);
});

app.post("/", (req, res) => {
  res.send("recebi os dados");
});

app.get("/contato", (req, res) => {
  res.send("Obrigado por entrar em Contato");
});

app.listen(3000, () => {
  console.log("Acessar http://localhost:3000");
});
