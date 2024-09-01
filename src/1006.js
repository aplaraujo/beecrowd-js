const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

const numArr = [];

for(let i = 0; i < lines.length; i++) {
    numArr.push(parseFloat(lines[i]));
}

const A = numArr[0];
const B = numArr[1];
const C = numArr[2];

const MEDIA = ((A * 2) + (B * 3) + (C * 5)) / 10;

console.log(`MEDIA = ${MEDIA.toFixed(1)}`);