const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

const getQuadrant = (a, b) => {
    if (a > 0 && b > 0) {
        console.log("primeiro")
    } else if (a < 0 && b > 0) {
        console.log("segundo")
    } else if (a < 0 && b < 0) {
        console.log("terceiro")
    } else if (a > 0 && b < 0) {
        console.log("quarto")
    }
}

let arr = [];
let str = '';

while (str = lines.shift()) {
    arr = str.split(' ');
    let X = Number(arr[0]);
    let Y = Number(arr[1]);

    if (X !== 0 || Y !== 0) {
        getQuadrant(X, Y);
    }
}