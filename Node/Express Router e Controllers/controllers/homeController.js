exports.paginaInicial = (req, res) => {
  res.send(`
  <form method="post" action="/">
    Nome do cliente: <input type="text" name="nome"><br>
    Outro campo: <input type="text" name="outrocampo">
    <button>send</button>
  </form>
  `);
};

exports.trataPost = (req,res) => {
  res.send("rota de POST")
}