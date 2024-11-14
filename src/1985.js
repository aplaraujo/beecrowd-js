const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

function total(code, quantity) {
    let price;

    switch (code) {
        case 1001:
            price = 1.50
            break;
        case 1002:
            price = 2.50
            break;
        case 1003:
            price = 3.50
            break;
        case 1004:
            price = 4.50
            break;
        case 1005:
            price = 5.50
            break;
        default:
            break;
    }

    const totalValue = price * quantity;
    return totalValue;
}

let totalPrice = 0

const N = Number(lines.shift());

for(let i = 0; i < N; i++) {
    let line = lines[i].split(" ").map(num => Number(num))
    const A = line[0];
    const B = line[1];
    totalPrice += total(A, B);
}

console.log(totalPrice.toFixed(2));