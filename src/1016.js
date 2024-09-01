const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

const getTime = (X) => {
    const time = X * 2;
    return `${time} minutos`;
}

const T = parseInt(lines);

console.log(`${getTime(T)}`);