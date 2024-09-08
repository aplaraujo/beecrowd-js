const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

const arr = lines.map(num => Number(num));

let X = arr[0];
let Z;
let soma = X;
let qtd = 1;

for (let i = 0; i < arr.length; i++) {
    if(arr[i] > X) {
        Z = arr[i];
    }
}

while(soma <= Z) {
  X++;
  soma = soma + X;
  qtd++; 
}


console.log(qtd);