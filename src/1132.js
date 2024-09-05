const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

let [X, Y] = lines.map(num => Number(num));
let aux;
let soma = 0;

if (X > Y) {
    aux = X;
    X = Y;
    Y = aux;
}

for (let i = X; i <= Y; i++) {
    if (i % 13 !== 0) {
        soma = soma + i;
    }
}

console.log(soma);