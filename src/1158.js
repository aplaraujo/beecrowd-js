const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

const N = Number(lines.shift());

for (let i = 1; i <= N; i++) {
    let line = lines.shift().split(" ").map(num => Number(num));
    let X = line[0];
    let Y = line[1];

    let soma = 0;
    let cont = 0;
    
    if (X % 2 === 0) {
        X++
    }

    while (cont < Y) {
        soma = soma + X;
        X += 2;
        cont++
    }

    console.log(soma);
}