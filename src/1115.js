const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

const getQuadrant = (a, b) => {
    if (a > 0 && b > 0) {
        console.log("primeiro")
    } else if (a < 0 && b > 0) {
        console.log("segundo")
    } else if (a < 0 && b < 0) {
        console.log("terceiro")
    } else if (a > 0 && b < 0) {
        console.log("quarto")
    }
}

for (let i = 0; i < lines.length; i++) {
    let line = lines[i].split(" ").map(num => Number(num));
    let X = line[0];
    let Y = line[1];
    getQuadrant(X, Y);
}