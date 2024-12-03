const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

const N = Number(lines.shift());

for (let i = 0; i < N; i++) {
   if (lines[i].includes('?')) {
    console.log('I am Toorg!');
   }
}