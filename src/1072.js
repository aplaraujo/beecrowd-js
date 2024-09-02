const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

const getIntervalValues = (val, numArr) => {
    const yes = [];
    const no = [];
    for (let i = 0; i < val; i++) {
        if (numArr[i] >= 10 && numArr[i] <= 20) {
            yes.push(numArr[i]);
        } else {
            no.push(numArr[i]);
        }
    }
    return `${yes.length} in\n${no.length} out`;
}

const numArr = [];

for(let i = 0; i < lines.length; i++) {
    numArr.push(parseInt(lines[i]));
}

const first = numArr.shift();

console.log(getIntervalValues(first, numArr));