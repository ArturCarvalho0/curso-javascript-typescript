// CRUD -> Create,    Read,    Update,    Delete
//         Criar      Ler      Atualizar  Apagar
//         Post       Get      Put        Delete
const express = require("express");
const app = express();

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
  res.send(`
  <form method="post" action="/">
    Nome do cliente: <input type="text" name="nome"><br>
    Outro campo: <input type="text" name="outrocampo">
    <button>send</button>
  </form>
  `);
});

app.get("/teste/:id?/:nome?", (req, res) => {
  // /profiles/3
  // /profiles/?chave1=valor1&chave2=valor2&chave3=valor3
  console.log(req.params);
  console.log(req.query);
  res.send(req.query);
});

app.post("/", (req, res) => {
  console.log(req.body);
  res.send("Dados enviados : " + req.body.nome);
});

app.listen(3000, () => {
  console.log("Acessar http://localhost:3000");
});
