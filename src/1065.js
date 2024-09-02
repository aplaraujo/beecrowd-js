const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split(' ');

const getEven = (numArr) => {
    const even = [];
    for (let i = 0; i <= 4 ; i++) {
        if (numArr[i] % 2 === 0) {
            even.push(numArr[i]);
        }
    }
    return `${even.length} valores pares`;
}

const numArr = [];

for (let i = 0; i < lines.length; i++) {
    numArr.push(parseInt(lines[i]));
}

console.log(getEven(numArr));