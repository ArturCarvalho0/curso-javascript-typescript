/*
Artur Fabio de Oliveira Carvalho tem 19 anos, pesa 84 kg
tem 1.8 de altura e seu IMC é de 23.38868655818771
Luiz Otávio nasceu em 1980
*/
const nome = 'Artur Fabio';
const sobrenome = 'Carvalho';
const idade = 19;
const peso = 70;
const alturaEmM = 1.73; // Corrigido para metros (ao invés de cm)
let indiceMassaCorporal; // peso / (altura * altura)
let anoNascimento;

indiceMassaCorporal = peso / (alturaEmM * alturaEmM);
anoNascimento = 2022 - idade;


// template strings

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`);
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${indiceMassaCorporal}`);
console.log(`${nome} nasceu em ${anoNascimento}.`);
