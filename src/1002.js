const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

const raio = Number(lines.shift());
const n = 3.14159;
const area = n * (raio ** 2);

console.log(`A=${area.toFixed(4)}`);