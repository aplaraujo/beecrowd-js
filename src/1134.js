const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

const arr = lines.map(num => Number(num));

let alcool = 0;
let gasolina = 0;
let diesel = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
        alcool++;
    } else if (arr[i] === 2) {
        gasolina++;
    } else if (arr[i] === 3) {
        diesel++;
    } else if (arr[i] === 4) {
        break;
    }
}


console.log('MUITO OBRIGADO');
console.log(`Alcool: ${alcool}`);
console.log(`Gasolina: ${gasolina}`);
console.log(`Diesel: ${diesel}`);