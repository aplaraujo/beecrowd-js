const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

const N = Number(lines[0]);

let n = N;

for (let i = 0; i < 10; i++) {
    console.log(`N[${i}] = ${n}`);
    n = n * 2;
}