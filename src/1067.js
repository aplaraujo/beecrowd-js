const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

const val = Number(lines.shift());

for (let i = 1; i < val; i += 2) {
    console.log(i);
}