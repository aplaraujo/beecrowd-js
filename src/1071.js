const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

let [X, Y] = lines.map(num => Number(num));

let aux;
let soma = 0;

if (Y < X) {
  aux = Y;
  Y = X;
  X = aux;
}

if (X % 2 !== 0) {
  for (let i = X + 2; i < Y; i++) {
    if (i % 2 !== 0) {
      soma += i;
    }
  }
} else {
  for (let i = X + 1; i < Y; i++) {
    if (i % 2 !== 0) {
      soma += i;
    }
  }
}

console.log(soma);