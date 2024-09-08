const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

const divExata = (dividendo, divisor) => dividendo % divisor === 0;

const numPrimo = (num) => {
    const div = [];
    let qtdDiv = 0;
    for (let i = 1; i <= num; i++) {
        if (divExata(num, i)) {
            div.push(i)
            qtdDiv++
        }
    }

    for (let i = 0; i < div.length; i++) {
        console.log(div[i])
    }
}

const num = Number(lines);


numPrimo(num);