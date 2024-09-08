const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

const getTime = (val) => {
    const hour = Math.floor(val / 3600);
    const minutes = Math.floor((val % 3600) / 60);
    const seconds = val % 60;
    return hour+":"+minutes+":"+seconds;
}

const value = parseInt(lines.shift());

console.log(getTime(value));