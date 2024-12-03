const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

for (let i = 0; i < lines.length; i++) {
    const line = lines[i].split(' ').map(Number);
    let A = line[0];
    let B = line[1];
    
    if (A !== 0 && B !== 0) {
        console.log(A+B);
    }
}