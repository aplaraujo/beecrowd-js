const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

const N = Number(lines.shift());

let arr = [];
let str = '';

while (str = lines.shift()) {
    arr = str.split(' ').map(num => Number(num));
    let X = arr[0];
    let Y = arr[1];

    if (X % 2 === 0) {
        X++;
    }

    let an = X + (Y - 1) * 2;

    let soma = Y * (X + an) / 2;

    console.log(soma);
}