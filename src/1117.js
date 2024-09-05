const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

const numArr = lines.map(num => Number(num));

const validGrades = [];

for (let i = 0; i < numArr.length; i++) {
    if (numArr[i] >= 0 && numArr[i] <= 10) {
        validGrades.push(numArr[i]);
    } else {
       console.log("nota invalida") 
    }
}

const average = validGrades.reduce((acc, grade) => acc + grade, 0) / 2;

console.log(`media = ${average.toFixed(2)}`);