const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

const getPositive = (numArr) => {
    const positive = [];
    for (let i = 0; i <= 6; i++) {
        if (numArr[i] > 0) {
            positive.push(numArr[i])
        }
    }
    return `${positive.length} valores positivos`
}

const numArr = [];

for (let i = 0; i < lines.length; i++) {
    numArr.push(parseInt(lines[i]));
}

console.log(getPositive(numArr));