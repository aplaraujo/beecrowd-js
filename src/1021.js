const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

let val = Number(lines.shift());

const notas = [100, 50, 20, 10, 5, 2];
const moedas = [1.0, 0.5, 0.25, 0.1, 0.05, 0.01];

console.log("NOTAS:");
for (let nota of notas) {
  let saque = parseInt(val / nota);
  console.log(`${saque} nota(s) de R$ ${nota}.00`);
  val = val % nota;
}

console.log("MOEDAS:");
for (let moeda of moedas) {
  saque = parseInt(val / moeda);
  console.log(`${saque} moeda(s) de R$ ${moeda.toFixed(2)}`);
  val = val % moeda + 0.00001;
}