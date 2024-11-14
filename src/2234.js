const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

const [H, P] = lines.shift().split(" ").map(num => Number(num));

const hotDogAverage = H / P;

console.log(hotDogAverage.toFixed(2));