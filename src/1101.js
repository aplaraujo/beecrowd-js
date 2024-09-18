const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

let [x, y] = lines.shift().split(" ");
let M = Number(x);
let N = Number(y);
let str = '';
let sum = 0;

while (true) {
    if (M <= 0 || N <= 0) return;

    if (M > N) {
        for (let i = N; i <= M; i++) {
            str += i + ' ';
            sum += i;

        }
        console.log(`${str} Sum=${sum}`)
    } else if (N > M) {
        for (let i = M; i <= N; i++) {
            str += i + ' ';
            sum += i;
        }
        console.log(`${str} Sum=${sum}`)
    }

    [x, y] = lines.shift().split(" ");
    M = Number(x);
    N = Number(y);
    str = '';
    sum = 0;
}