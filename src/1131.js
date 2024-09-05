const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

let resposta;
let [A, B] = lines.shift().split(' ').map(num => Number(num));
let x = A;
let y = B;
let inter = 0;
let gremio = 0;
let grenal = 0;
let empate = 0;


while (true) {
    if (x === y) {
        empate++
    } else {
        if (x > y) {
            inter++
        } else {
            gremio++
        }
    }
    grenal++;

    console.log('Novo grenal (1-sim 2-nao)');
    resposta = Number(lines.shift());
    if (resposta === 1) {
    } else {
        break;
    }

    [A, B] = lines.shift().split(' ').map(num => Number(num));
    x = A;
    y = B;

}

console.log(`${grenal} grenais`);
console.log(`Inter:${inter}`);
console.log(`Gremio:${gremio}`);
console.log(`Empates:${empate}`);

if (inter === gremio) {
    console.log("Nao houve vencedor")
} else {
    if (inter > gremio) {
        console.log("Inter venceu mais")
    } else {
        console.log("Gremio venceu mais")
    }
}