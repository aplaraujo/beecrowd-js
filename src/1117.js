const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

const arr = lines.map(num => Number(num));
const validGrades = [];

for (let i = 0; i < arr.length; i++) {
    if(arr[i] < 0 || arr[i] > 10) {
        console.log("nota invalida");
    } else {
        validGrades.push(arr[i]);
    }
}

const grade1 = validGrades[0];
const grade2 = validGrades[1];

const average = (grade1 + grade2) / 2;

console.log(`media = ${average.toFixed(2)}`);