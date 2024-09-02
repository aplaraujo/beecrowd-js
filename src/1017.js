const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

const getFuelQuantity = (veloc, time) => {
    const dist = veloc * time;
    const fuel = dist / 12;
    return fuel.toFixed(3);
}

const numArr = [];

for(let i = 0; i < lines.length; i++) {
    numArr.push(parseInt(lines[i]));
}

const T = numArr[0];
const V = numArr[1];

console.log(getFuelQuantity(V, T));