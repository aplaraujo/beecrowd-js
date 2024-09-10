const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

let O = lines.shift();
const arr = lines.map(num => Number(num));
const newArr = [];
let r1 = 0;
let r2 = 0;

while(arr.length) {
    newArr.push(arr.splice(0, 12));
}

for (let i = 0; i < 12; i++) {
    for (let j = 0; j < 12; j++) {
        newArr[i][j];
    }
}

let c = 1;

for (let i = 11; i > 6; i--) {
   for (let j = c; j < 6; j++) {
    r1 += newArr[i][j];
   }
    c++;
}

let e = 7;

for (let i = 7; i < 12; i++) {
    for (let j = 6; j < e; j++) {
        r2 += newArr[i][j];
    }
    e++;
}

let sum = r1 + r2;


if (O === 'S') {
    console.log(Math.floor(sum.toFixed(2)));
} else {
    console.log(sum / 30);
}