const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

let joiasDistintas = new Set();

for (let joia of lines) {
  joiasDistintas.add(joia);
}
console.log(joiasDistintas.size - 1);