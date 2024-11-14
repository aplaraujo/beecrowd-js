const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

const N = Number(lines[0]);

if(N >= 86 && N <= 100) {
    console.log("A");
} else if (N >= 61 && N <= 85) {
    console.log("B");
} else if (N >= 36 && N <= 60) {
    console.log("C");
} else if (N >= 1 && N <= 35) {
    console.log("D");
} else {
    console.log("E");
}