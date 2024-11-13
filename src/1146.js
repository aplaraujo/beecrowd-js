const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

const arr = lines.map(num => Number(num));
let X;
let line = '';

for (let i = 0; i < arr.length; i++) {
    while (X > 0) {
        X = arr[i];

        if (X === 0) {
            console.log(line.trim());
            break;
        } else {
            for (let j = 1; j <= X; j++) {
                if(j === X) {
                    line += i + '\n';
                } else {
                    line += i + ' ';
                }
            }
        }
    }
}

console.log(line);