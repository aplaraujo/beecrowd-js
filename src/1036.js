const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

const arr = lines.shift().split(' ').map(num => Number(num));

const A = arr[0];
const B = arr[1];
const C = arr[2];

const delta = (B * B) - (4 * A * C);

if (delta < 0 || A === 0) {
    console.log('Impossivel calcular');
} else {
    let r1 = parseFloat((- B + Math.sqrt(delta)) / (A + A));
    let r2 = parseFloat((- B - Math.sqrt(delta)) / (A + A));
    console.log('R1 = ' + r1.toFixed(5));
    console.log('R2 = ' + r2.toFixed(5));
}