const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

const N = Number(lines.shift());

for (let i = 1; i <= 10000; i++) {
    if (i % N === 2) {
        console.log(i);
    }
}