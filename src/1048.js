const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

let salario = Number(lines.shift());

let reajuste;
let percentual;

if (salario >= 0 && salario <= 400.00) {
    reajuste = salario * 0.15;
    percentual = 15;
} else if (salario > 400.00 && salario <= 800.00) {
    reajuste = salario * 0.12;
    percentual = 12;
} else if (salario > 800.00 && salario <= 1200.00) {
    reajuste = salario * 0.10;
    percentual = 10;
} else if (salario > 1200.00 && salario <= 2000.00) {
    reajuste = salario * 0.07;
    percentual = 7;
} else {
    reajuste = salario * 0.04;
    percentual = 4;
}

console.log(`Novo salario: ${(salario + reajuste).toFixed(2)}`);
console.log(`Reajuste ganho: ${reajuste.toFixed(2)}`);
console.log(`Em percentual: ${percentual} %`);