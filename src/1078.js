const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

const num = Number(lines);

for (let i = 1; i <= 10; i++) {
 console.log(`${i} x ${num} = ${i * num}`);   
}