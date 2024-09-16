const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

const arr = lines.map(num => Number(num));

const positive = [];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
        positive.push(arr[i])
    }
}

const positiveAverage = positive.reduce((acc, val) => acc + val, 0) / positive.length;

console.log(`${positive.length} valores positivos`);
console.log(positiveAverage.toFixed(1));