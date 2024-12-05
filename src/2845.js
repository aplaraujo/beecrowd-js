const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

const N = Number(lines.shift());

const arr = lines.shift().split(' ').map(Number);

const sortedArr = arr.sort((a, b) => a - b);

console.log(sortedArr[sortedArr.length - 1] + 1)