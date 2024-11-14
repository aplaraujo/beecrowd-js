const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

const N = Number(lines.shift());

const arr = lines.map(num => Number(num));

for (let i = 0; i < N; i++) {
    if (arr[i] % 2 === 0) {
        console.log(0);
    } else {
        console.log(1);
    }
}