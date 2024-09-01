const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

const numArr = [];

for(let i = 0; i < lines.length; i++) {
    numArr.push(parseInt(lines[i]));
}

const A = numArr[0];
const B = numArr[1];
const C = numArr[2];
const D = numArr[3];

const DIFERENCA = (A * B) - (C * D);

console.log(`DIFERENCA = ${DIFERENCA}`);