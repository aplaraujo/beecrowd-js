const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

const arr = lines[0].split(' ').map(num => Number(num));

const A = arr[0];
const B = arr[1];
const C = arr[2];

const pi = 3.14159;

const tri = (A * C) / 2;
const cir = pi * (C * C);
const tra = ((A + B) * C) / 2;
const qua = B * B;
const ret = A * B;

console.log(`TRIANGULO: ${tri.toFixed(3)}\nCIRCULO: ${cir.toFixed(3)}\nTRAPEZIO: ${tra.toFixed(3)}\nQUADRADO: ${qua.toFixed(3)}\nRETANGULO: ${ret.toFixed(3)}`);