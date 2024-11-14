const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

const arr = lines.map(num => Number(num));

const arr2 = [];

for(let i = 0; i < arr.length; i++) {
    arr2.push(arr[i] - 1);
}

for (let i = 0; i < arr2.length - 1; i++) {
    console.log(arr2[i])
}