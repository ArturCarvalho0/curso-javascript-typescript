const pontuacaoUsuario = 1099;

const nivelUsuario =
  pontuacaoUsuario >= 1000 ? "Usuario Vip" : "Usuario normal";

const corUsuario = null;
const corPadrao = corUsuario || "preta";

console.log(nivelUsuario,corPadrao);

// if (pontuacaoUsuario >= 1000) {
//   console.log("usuario vip");
// } else {
//   console.log("usuario normal");
// }
