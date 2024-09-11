const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

const val = Number(lines.shift());

const n100 = val / 100;
const r100 = val % 100;

const n50 = r100 / 50;
const r50 = r100 % 50;

const n20 = r50 / 20;
const r20 = r50 % 20;

const n10 = r20 / 10;
const r10 = r20 % 10;

const n5 = r10 / 5;
const r5 = r10 % 5;

const n2 = r5 / 2;
const r2 = r5 % 2;

const n1 = r2 / 1;
const r1 = r2 % 1;

console.log(val);
console.log(`${Math.floor(n100)} nota(s) de R$ 100,00`);
console.log(`${Math.floor(n50)} nota(s) de R$ 50,00`);
console.log(`${Math.floor(n20)} nota(s) de R$ 20,00`);
console.log(`${Math.floor(n10)} nota(s) de R$ 10,00`);
console.log(`${Math.floor(n5)} nota(s) de R$ 5,00`);
console.log(`${Math.floor(n2)} nota(s) de R$ 2,00`);
console.log(`${Math.floor(n1)} nota(s) de R$ 1,00`);