const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

const getNumberOrder = (a, b) => {
    return (a > b) ? "Crescente" : "Decrescente";
}

let arr = [];
let str = '';

while (str = lines.shift()) {
    arr = str.split(' ');
    let X = Number(arr[0]);
    let Y = Number(arr[1]);

    console.log(getNumberOrder(X, Y));
}