/**
Aritméticos
+ Adição / Concatenação
- Subtração
/ Divisão
* Multiplicação
** Potenciação
% Resto da divisão
 */

/**
Precedência 
()
**
* / %
+ - 
 */


let num1 = 2;
let num2 = 5;
let num3 = 10;
console.log(num1 + num2 * num3);

let contador = 1; 
contador++;
console.log(contador);

let contador1 = 2;
contador1 **= 2; // contador = contador + passo
console.log(contador1);

num1 = 10;
num2 = '5';
console.log(num1 * num2);

// NaN - Not a number : ParseInt(Inteiro), parseFloat(decimais) e Number
num1 = 10;
num2 = parseInt('5.2');
console.log(num1 + num2);
console.log(typeof num2);

