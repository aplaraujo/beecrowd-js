const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

const [N, M] = lines.map(num => Number(num));

const diferencaPressao = N - M;

console.log(diferencaPressao);