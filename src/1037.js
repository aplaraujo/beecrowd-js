const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

function interval(num) {
    if (num >= 0 && num <= 25) {
        console.log("Intervalo [0,25]")
    } else if (num > 25 && num <= 50) {
        console.log("Intervalo (25,50]")
    } else if (num > 50 && num <= 75) {
        console.log("Intervalo (50,75]")
    } else if (num > 75 && num <= 100) {
        console.log("Intervalo (75,100]")
    } else {
        console.log("Fora de intervalo")
    }
}

const num = Number(lines.shift());

interval(num);