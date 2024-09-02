const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

const getSquareValues = (val) => {
    const even = [];
    for(let i = 0; i <= val; i++) {
        if (i % 2 === 0) {
            even.push(i);
        }
    }
    
    for (let i = 1; i < even.length; i++) {
        console.log(`${even[i]}^2 = ${even[i] ** 2}`);
    }
}

const num = Number(lines);

getSquareValues(num);