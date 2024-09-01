const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

const numArr = [];

for (let i = 0; i < lines.length; i++) {
   numArr.push(parseInt(lines[i]));
}

const SOMA = numArr[0] + numArr[1];

console.log(`SOMA = ${SOMA}`);