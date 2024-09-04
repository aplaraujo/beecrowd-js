const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

const getDivision = (a, b) => {
    let div = a / b;
    return (a > 0 && b === 0) || (a < 0 && b === 0) ? "divisao impossivel" : div.toFixed(1);
}

const first = Number(lines.shift());

for (let i = 0; i < first; i++) {
    const line = lines.shift().split(' ').map(item => Number(item));
    const A = line[0];
    const B = line[1];

    console.log(getDivision(A, B));
}