const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

let N = Number(lines.shift());

while (N > 0) {
    let line = lines.shift();

    if (line % 2 === 0) {
        if (line > 0) {
            console.log("EVEN POSITIVE");
        } else if (line < 0) {
            console.log("EVEN NEGATIVE");
        } else {
            console.log("NULL");
        }
    } else if (line % 2 !== 0) {
        if (line > 0) {
            console.log("ODD POSITIVE");
        } else if (line < 0) {
            console.log("ODD NEGATIVE");
        } else {
            console.log("NULL");
        }
    }

    N--;
}