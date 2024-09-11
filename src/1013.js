const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

function abs(num) {
    return (num < 0) ? num * -1 : num;
}

const arr = lines.shift().split(' ').map(num => Number(num));

const A = arr[0];
const B = arr[1];
const C = arr[2];

const maiorAB = (A + B + abs(A - B)) / 2;
const maior = (maiorAB + C + abs(maiorAB - C)) / 2;

console.log(`${maior} eh o maior`);