const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

const arr = lines.map(num => Number(num));

const validGrades = [];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 0 && arr[i] <= 10) {
        validGrades.push(arr[i]);
    } else {
       console.log("nota invalida") 
    }
    console.log('novo calculo (1-sim 2-nao)')

    if (arr[i] !== 1 || arr[i] > 2) {
        console.log('novo calculo (1-sim 2-nao)') 
    }
}

