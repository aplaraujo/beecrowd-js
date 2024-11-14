const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

function xmasTree(a, b, c) {
    if ((a >= 200 && a <= 300) && (b >= 50) && (c >= 150)) {
        return "Sim"
    } else {
        return "Nao"
    }
}

const N = Number(lines.shift());

for (let i = 1; i <= N; i++) {
    let line = lines.shift().split(" ").map(num => Number(num));
    const h = line[0];
    const d = line[1];
    const g = line[2];
    console.log(xmasTree(h, d, g));
}