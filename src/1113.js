const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

let x;
let y;

do {
    let line = lines.shift().split(' ');
    x = Number(line[0]);
    y = Number(line[1]);

    if (x < y) {
        console.log('Crescente');
    } else if (x > y) {
        console.log('Decrescente');
    }
    
} while (x !== y);