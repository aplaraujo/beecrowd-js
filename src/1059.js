const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split(' ');

for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}