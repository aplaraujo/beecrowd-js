const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

const arr = lines.map(num => Number(num));

for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= 0) {
        arr[i] = 1;
    }
}

for (let i = 0; i < arr.length; i++) {
    console.log(`X[${i}] = ${arr[i]}`);
}