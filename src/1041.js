const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

const arr = lines.shift().split(' ').map(num => Number(num));

const x = arr[0];
const y = arr[1];

if (x === 0 && y === 0) {
    console.log('Origem');
} else if (x > 0  && y > 0) {
    console.log('Q1');
} else if (x < 0 && y > 0) {
    console.log('Q2');
} else if (x < 0 && y < 0) {
    console.log('Q3');
} else if (x > 0 && y < 0) {
    console.log('Q4');
} else if (x > 0 && y === 0) {
    console.log('Eixo X');
} else if (x < 0 && y === 0) {
    console.log('Eixo X');
} else if (x === 0 && y > 0) {
    console.log('Eixo Y');
} else if (x === 0 && y < 0) {
    console.log('Eixo Y');
}