const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

const N = Number(lines[0]);

for (let i = 0; i < 1000; i++) {
    console.log(`N[${i}] = ${i % N}`);
}

