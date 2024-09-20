const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

let arr = lines.map(num => Number(num));

let limite = 0;
let n1;
let n2;
let media;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 0 && arr[i] <= 10) {
        limite++;
        if (limite === 1) {
            n1 = arr[i];
        }

        if (limite === 2) {
            n2 = arr[i];
            media = (n1 + n2) / 2;
            console.log(`media = ${media.toFixed(2)}`);
        }

        if (limite > 2 && arr[i] === 2) {
            console.log('novo calculo (1-sim 2-nao)');
            break;
        }
    }

    if (limite < 2 && arr[i] > 10) {
        console.log('nota invalida');
    }

    if (limite < 2 && arr[i] < 0) {
        console.log('nota invalida');
    }

    if (limite > 2) {
        console.log('novo calculo (1-sim 2-nao)');
    }

    if (arr[i] === 1 && limite > 2) {
        limite = 0;
    }
}