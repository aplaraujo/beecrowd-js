const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

const arr = lines.shift().split(' ').map(num => Number(num));

const horaInicial = arr[0];
const horaFinal = arr[1];

let total;
 
if (horaFinal < horaInicial) {
		total = (24 - horaInicial) + horaFinal;
} else {
	if (horaFinal > horaInicial) {
  		total = horaFinal - horaInicial;
  } else if (horaFinal === horaInicial) {
  		total = 24;
  }
}

console.log(`O JOGO DUROU ${total} HORA(S)`)