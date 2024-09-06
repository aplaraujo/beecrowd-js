const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

const N = Number(lines);

for (let i = 0; i < N; i++) {
    console.log(`${i + 1} ${Math.pow((i + 1), 2)} ${Math.pow((i + 1), 3)}`);
}