const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.replace(/[A-Za-z:]/g, '').split('\n');

const primeiroDia = Number(lines[0].replace(/[\n\r\s\t]+/g, ' '));
const [horaInicial, minutoInicial, segundoInicial] = lines[1].replace(/[\n\r\s\t]+/g, ' ').split(' ').map(Number);
const ultimoDia = Number(lines[2].replace(/[\n\r\s\t]+/g, ' '));
const [horaFinal, minutoFinal, segundoFinal] = lines[3].replace(/[\n\r\s\t]+/g, ' ').split(' ').map(Number);

let W = ultimoDia - primeiroDia;
let X = horaFinal - horaInicial;
let Y = minutoFinal - minutoInicial;
let Z = segundoFinal - segundoInicial;

if (Z < 0) {
    Z += 60;
    Y = Y - 1;
}

if (Y < 0) {
    Y += 60;
    X = X - 1;
}

if (X < 0) {
    X += 24;
    W = W - 1;
}

console.log(`${W} dia(s)`);
console.log(`${X} hora(s)`);
console.log(`${Y} minuto(s)`);
console.log(`${Z} segundo(s)`);