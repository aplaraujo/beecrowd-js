const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

const getAverage = (a, b) => {
    return ((a * 3.5) + (b * 7.5)) / 11;
}

const arr = lines.map(num => parseFloat(num));

const A = arr[0];
const B = arr[1];

console.log(`MEDIA = ${getAverage(A, B).toFixed(5)}`);