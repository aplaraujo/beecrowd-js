const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

const getOddSum = (a, b) => {
    let soma = 0;
    const odd = [];

    if (a < b) {
        for (let i = a + 1; i < b; i++) {
            if (i % 2 !== 0) {
                odd.push(i)
            }
        }
    } else {
        for (let i = b + 1; i < a; i++) {
            if (i % 2 !== 0) {
                odd.push(i)
            }
        }
    }

    for (let i = 0; i < odd.length; i++) {
        soma = soma + odd[i];
    }

    return soma;
}

const first = Number(lines.shift());

for (let i = 0; i < first; i++) {
    const line = lines.shift().split(' ').map(num => Number(num));

    const l1 = line[0];
    const l2 = line[1];

    console.log(getOddSum(l1, l2));
}