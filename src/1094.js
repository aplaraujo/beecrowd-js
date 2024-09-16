const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

const N = Number(lines.shift());

const R = [];
const C = [];
const S = [];

for (let i = 0; i < N; i++) {
    if (lines[i].includes('R')) {
        R.push(lines[i]);
    }

    if (lines[i].includes('C')) {
        C.push(lines[i]);
    }

    if (lines[i].includes('S')) {
        S.push(lines[i])
    }
}

const R2 = R.map(char => char.replace('R', '')).map(num => Number(num));
const C2 = C.map(char => char.replace('C', '')).map(num => Number(num));
const S2 = S.map(char => char.replace('S', '')).map(num => Number(num));

const qtdR = R2.reduce((acc, val) => acc + val, 0);
const qtdC = C2.reduce((acc, val) => acc + val, 0);
const qtdS = S2.reduce((acc, val) => acc + val, 0);
const total = qtdR + qtdC + qtdS;
const percR = (qtdR * 100) / total;
const percC = (qtdC * 100) / total;
const percS = (qtdS * 100) / total;

console.log(`Total: ${total} cobaias`);
console.log(`Total de coelhos: ${qtdC}`);
console.log(`Total de ratos: ${qtdR}`);
console.log(`Total de sapos: ${qtdS}`);
console.log(`Percentual de coelhos: ${percC.toFixed(2)} %`);
console.log(`Percentual de ratos: ${percR.toFixed(2)} %`);
console.log(`Percentual de sapos: ${percS.toFixed(2)} %`);