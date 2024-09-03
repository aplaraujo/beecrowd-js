const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

const getAverage = (A, B, C) => {
    return ((A * 2) + (B * 3) + (C * 5)) / 10;
}

const first = lines.shift();

for (let i = 0; i < first; i++) {
    let line = lines.shift().split(' ').map(item => parseFloat(item));
    let g1 = line[0];
    let g2 = line[1];
    let g3 = line[2];
    
    console.log(getAverage(g1, g2, g3).toFixed(1));
}