const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

let i = 0;
let j = 1;

while(i <= 2.1) {
    console.log(`I=${i} J=${j + i}`);
    console.log(`I=${i} J=${j + 1 + i}`);
    console.log(`I=${i} J=${j + 2 + i}`);
    i += 0.2;
}