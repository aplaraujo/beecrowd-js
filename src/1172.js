const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

const arr = lines.map(num => Number(num));

for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= 0) {
        console.log(`X[${i}] = ${1}`);
    } else {
        console.log(`X[${i}] = ${arr[i]}`);
    }
};