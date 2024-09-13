const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

const lados = lines.shift().split(' ').map(num => Number(num));

let aux;
 
for(let i = 0; i < lados.length; i++) {
	for(let j = 0; j < i; j++) {
		if (lados[i] > lados[j]) {
			aux = lados[j];
          	lados[j] = lados[i];
          	lados[i] = aux;
		}
	}
}
 
const A = lados[0];
const B = lados[1];
const C = lados[2];
 
if (A >= B + C) {
	console.log("NAO FORMA TRIANGULO");
} else {
	if ((A * A) === (B * B) + (C * C)) {
		console.log("TRIANGULO RETANGULO");
	} else if ((A * A) > (B * B) + (C * C)) {
	    console.log("TRIANGULO OBTUSANGULO");
	} else if ((A * A) < (B * B) + (C * C)) {
	    console.log("TRIANGULO ACUTANGULO");
	}
}
 
if(A === B && B === C && C === A) {
	console.log("TRIANGULO EQUILATERO");
} else if(A == B || A == C || B == C) {
	console.log("TRIANGULO ISOSCELES");
}