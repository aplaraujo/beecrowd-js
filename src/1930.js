const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

const [T1, T2, T3, T4] = lines.shift().split(" ").map(num => Number(num))

const totalPlugs = (T1 + T2 + T3 + T4) - 3;

console.log(totalPlugs);