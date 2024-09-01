const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

const numArr = [];

for(let i = 0; i < lines.length; i++) {
    numArr.push(Number(lines[i]));
}

const X = numArr[0];
const Y = numArr[1];

const consumo = X / Y;

console.log(`${consumo.toFixed(3)} km/l`);