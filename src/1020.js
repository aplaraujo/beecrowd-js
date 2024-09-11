const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

const val = Number(lines.shift());

const anos = Math.floor(val / 365);
const meses = Math.floor((val % 365) / 30);
const dias = (val % 365) % 30;

console.log(`${anos} ano(s)`);
console.log(`${meses} mes(es)`);
console.log(`${dias} dia(s)`);