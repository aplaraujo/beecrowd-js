const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

const arr = lines.shift().split(' ').map(num => Number(num));

const [horaInicial, minutoInicial, horaFinal, minutoFinal] = arr;

let totalHoras = horaFinal - horaInicial;
let totalMinutos = minutoFinal - minutoInicial;

if (totalHoras === 0 && totalMinutos === 0) {
    totalHoras += 24;
}

if (totalMinutos < 0) {
    totalMinutos = (60 + minutoFinal) - minutoInicial;
    totalHoras = (horaFinal - 1) - horaInicial;
}

if (totalHoras < 0) {
    totalHoras = (24 + (horaFinal - 1)) - horaInicial;
}

console.log(`O JOGO DUROU ${totalHoras} HORA(S) E ${totalMinutos} MINUTO(S)`);