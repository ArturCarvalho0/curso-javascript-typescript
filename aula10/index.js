let varA = "A"; // B

let varB = "B"; // C

let varC = "C"; // A 

let aux; 

console.log(varA, varB, varC);

aux = varC; 

varC = varA; 

varA = varB; 

varB = aux

console.log(varA, varB, varC);

varA = "A"; // B

varB = "B"; // C

varC = "C"; // A 

//Maneira correta apresentada

[varA, varB, varC] = [varB, varC, varA];