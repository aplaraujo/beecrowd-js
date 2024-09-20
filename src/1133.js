const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

const arr = lines.map(num => Number(num));

let A = arr[0];
let B = arr[1];
let aux;

if (A > B) {
  aux = A;
  A = B;
  B = aux;  
}

for (let i = A + 1; i <= B - 1; i++) {
    if (i % 5 === 2 || i % 5 === 3) {
        console.log(i);
    }
}