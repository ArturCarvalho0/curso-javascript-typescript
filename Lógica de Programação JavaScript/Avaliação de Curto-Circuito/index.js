/*
&& -> false && true -> false "o mesmo valor"
|| -> false || true -> vai retornar "o valor verdadeiro"
falsy -> false,0,"",'',``,null,undefined,NaN
*/

function falaOi() {
  return "oi";
}

let vaiExecutar;

console.log(vaiExecutar && console.log(falaOi()));
