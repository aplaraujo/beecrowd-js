const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

const num = Number(lines[0]);

let fat = 1;

for (let i = 1; i <= num; i++) {
    fat = fat * i;
}

console.log(fat);