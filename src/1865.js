const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

const N = Number(lines.shift());

for (let i = 0; i < N; i++) {
    let line = lines.shift().split(" ");
    const A = line[0];
    
    if (A === "Thor") {
        console.log("Y")
    } else {
        console.log("N")
    }
}

