const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

const arr = lines.shift().split(' ').map(num => Number(num));

let A = arr[0];
let N;
let soma = 0;

for(let i = 0; i < arr.length; i++) {
    if(arr[i] > 0) {
        N = arr[i]
    }
}

for(let i = 1; i <= N; i++) {
    soma = soma + A;
    A++;
}

console.log(soma);