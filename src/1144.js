const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

const N = Number(lines);

for (let i = 1; i <= N; i++) {
    console.log(`${i} ${i*i} ${i*i*i}\n${i} ${i*i*i} ${i*i*i*i}`);
}