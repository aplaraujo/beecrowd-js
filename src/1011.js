const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

const R = Number(lines.shift());

const V = (4/3) * 3.14159 * (R * R * R);

console.log(`VOLUME = ${V.toFixed(3)}`);