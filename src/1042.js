const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

const arr = lines.shift().split(' ').map(num => Number(num));

let A = arr[0];
let B = arr[1];
let C = arr[2];
let D = A;
let E = B;
let F = C;
let aux;

if (D > E) {
    aux = D;
    D = E;
    E = aux;
}

if (D > F) {
    aux = D;
    D = F;
    F = aux;
}

if (E > F) {
    aux = E;
    E = F;
    F = aux;
}

console.log(`${D}\n${E}\n${F}`);
console.log();
console.log(`${A}\n${B}\n${C}`);