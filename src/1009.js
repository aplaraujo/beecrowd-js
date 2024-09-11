const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

const N = lines.shift();

const arr = lines.map(num => Number(num));

const SF = arr[0];
const TV = arr[1];

const T = SF + (TV * 0.15);

console.log(`TOTAL = R$ ${T.toFixed(2)}`);