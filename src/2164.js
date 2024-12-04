const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

function binet(n) {
    const calcBinet = (Math.pow(((1 + Math.sqrt(5)) / 2),n) - Math.pow(((1 - Math.sqrt(5)) / 2),n)) / Math.sqrt(5);
    return calcBinet.toFixed(1);
}

const n = Number(lines[0]);

console.log(binet(n));