const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

const arr = lines.map(el => el.split(' '));
const numArr = [];

for (let i = 0; i < arr.length; i++) {
    const newArr = arr[i];
    for (let j = 0; j < newArr.length; j++) {
        numArr.push(parseFloat(newArr[j]));
    }
}

const getDistance = (X1, Y1, X2, Y2) => {
    const distance = Math.sqrt(Math.pow((X2 - X1), 2) + Math.pow((Y2 - Y1), 2));
    return distance.toFixed(4);
}

const x1 = numArr[0];
const y1 = numArr[1];
const x2 = numArr[2];
const y2 = numArr[3];

console.log(getDistance(x1, y1, x2, y2));