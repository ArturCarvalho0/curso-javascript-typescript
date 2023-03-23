// // const mod1 = require("./mod1");
// // const falaNome = mod1.falaNome;
// const { nome, sobrenome, falaNome } = require("./mod1"); //importação via desestruturação
// console.log(falaNome());import { Pessoa } from './../../Javascript Tooling e ES6 Modules/Import e Export/src/modulo1';

const axios = require("axios");
const { Pessoa } = require("./mod1");

axios("https://www.otaviomiranda.com.br/files/json/pessoas.json")
  .then((response) => console.log(response.data))
  .catch((e) => console.log(e));

const p1 = new Pessoa("Artur")
console.log(p1.nome)