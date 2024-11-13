const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

const t = Number(lines[0]);

const qtdPessoas = t * 4;

console.log(qtdPessoas);