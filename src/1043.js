const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

const arr = lines.shift().split(' ').map(num => Number(num));
const A = arr[0];
const B = arr[1];
const C = arr[2];

if (A + B > C && B + C > A && A + C > B) {
    const per = A + B + C;
    console.log(`Perimetro = ${per.toFixed(1)}`);
} else {
    const area = (A + B) * C / 2;
    console.log(`Area = ${area.toFixed(1)}`);
}