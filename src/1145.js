const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

const arr = lines.shift().split(' ').map(num => Number(num));

let text = '';
const X = arr[0];
const Y = arr[1];

for (let i = 1; i <= Y; i++) {
    text += i + ' ';
    if (i % X === 0) {
        text += '\n';
    }
}

console.log(text);