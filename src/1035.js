const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

const arr = lines.shift().split(' ').map(num => Number(num));

const A = arr[0];
const B = arr[1];
const C = arr[2];
const D = arr[3];

if (B > C && D > A && C + D > A + B && C > 0 && D > 0 && A % 2 === 0) {
    console.log("Valores aceitos");
  } else {
    console.log("Valores nao aceitos");
  }