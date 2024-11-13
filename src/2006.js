const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

const T = Number(lines.shift());
const participantes = lines[0].split(" ").map(num => Number(num));
let resultado = 0

if (participantes.length > 5) {
    participantes.pop();
}
for (let i = 0; i < participantes.length; i++) {
    if (T === participantes[i]) {
        resultado++
    }
}

console.log(resultado);