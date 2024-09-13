const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

const arr = lines.shift().split(' ').map(num => Number(num));

const A = arr[0];
const B = arr[1];

if (A % B === 0 || B % A === 0) {
    console.log('Sao Multiplos');
} else {
    console.log('Nao sao Multiplos');
}