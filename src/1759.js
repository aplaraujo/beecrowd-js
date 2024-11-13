const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

const N = Number(lines.shift());

let str = ""

for(let i = 1; i <= N-1; i++) {
    str += " Ho";
}

console.log("Ho" + str + "!");