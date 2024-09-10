const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

const T = Number(lines.shift());

for (let i = 0; i < T; i++) {
    let line = lines.shift().split(' ').map(num => Number(num));
    let R1 = line[0];
    let R2 = line[1];

    console.log(R1 + R2);
}