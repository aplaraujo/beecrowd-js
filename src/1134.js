const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

const numArr = lines.map(num => Number(num));

let op;
let alcool = 0;
let gasolina = 0;
let diesel = 0;

for (let i = 0; i < numArr.length; i++) {
    op = numArr[i];

    while (op !== 4) {
        if (op === 1) {
            alcool++;
        }
        if (op === 2) {
            gasolina++;
        }
        if (op === 3) {
            diesel++;
        }
        i++

        op = numArr[i];
    }

}


console.log('MUITO OBRIGADO');
console.log(`Alcool: ${alcool}`);
console.log(`Gasolina: ${gasolina}`);
console.log(`Diesel: ${diesel}`);