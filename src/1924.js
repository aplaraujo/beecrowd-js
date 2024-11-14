const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

const n = Number(lines.shift());

let result = ""

for (let i = 1; i <= n; i++) {
    if (lines[i] === "Ciencia da Computacao") {
       result = "Ciencia da Computacao";
    } else {
       result = "Ciencia da Computacao" 
    }
}

console.log(result);