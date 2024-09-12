const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

let val = Number(lines.shift());

const notas = [100, 50, 20, 10, 5, 2];
const moedas = [1.0, 0.5, 0.25, 0.1, 0.05, 0.01];

console.log("NOTAS:");
for(let i = 0; i < notas.length; i++) {
    let saque = parseInt(val / notas[i]);
    console.log(`${saque} nota(s) de R$ ${notas[i]}.00`);
    val = val % notas[i];
}

console.log("MOEDAS:");
for(let i = 0; i < moedas.length; i++) {
    let saque = parseInt(val / moedas[i]);
    console.log(`${saque} moeda(s) de R$ ${moedas[i].toFixed(2)}`);
    val = val % moedas[i] + 0.00001;
}