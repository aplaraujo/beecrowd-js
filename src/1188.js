const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

let O = lines.shift();
const arr = lines.map(num => Number(num));
let M = [];
let sum = 0;

for (let i = 0; i < 12; i++) {
    M[i] = [];
    for (let j = 0; j < 12; j++) {
        M[i].push(j);
    }
}

for (let i = 0; i < 12; i++) {
    for (let j = 0; j < 12; j++) {
       console.log(M[i][j])
    }
}