const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

const N = Number(lines);

for (let i = 0; i < N; i++) {
    console.log(`${4 * i + 1} ${4 * i + 2} ${4 * i + 3} PUM`);
}