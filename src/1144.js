const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

const N = Number(lines[0]);

for (let i = 0+1; i < N; i++) {
    console.log(`${i} ${i*i} ${i*i*i}`);
    console.log(`${i} ${(i*i)+1} ${(i*i*i)+1}`);
}