const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

const arr = lines.map(num => Number(num));
const positiveAge = [];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
        positiveAge.push(arr[i]);
    }
}

const ageAverage = positiveAge.reduce((acc, age) => acc + age, 0) / positiveAge.length;

console.log(ageAverage.toFixed(2));