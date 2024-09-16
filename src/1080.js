const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

const arr = lines.map(num => Number(num));

let maior = 0;
let posicao = 0;

for (let i = 1; i <= arr.length; i++) {
    if (arr[i] > maior) {
        maior = arr[i];
        posicao = i+1;
    }
}

console.log(maior);
console.log(posicao);