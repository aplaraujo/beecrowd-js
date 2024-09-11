const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

const arr = lines.map(num => Number(num));

const N = arr[0];
const H = arr[1];
const VH = arr[2];

const S = H * VH;

console.log(`NUMBER = ${N}\nSALARY = U$ ${S.toFixed(2)}`);