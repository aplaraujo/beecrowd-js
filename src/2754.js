const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

const num1 = 234.345;
const num2 = 45.698;

console.log(`${num1.toFixed(6)} - ${num2.toFixed(6)}`);
console.log(`${num1.toFixed(0)} - ${num2.toFixed(0)}`);
console.log(`${num1.toFixed(1)} - ${num2.toFixed(1)}`);
console.log(`${num1.toFixed(2)} - ${num2.toFixed(2)}`);
console.log(`${num1.toFixed(3)} - ${num2.toFixed(3)}`);
console.log(`${num1.toExponential(6).replace('e+2', 'e+02')} - ${num2.toExponential(6).replace('e+1', 'e+01')}`);
console.log(`${num1.toExponential(6).toUpperCase().replace('E+2', 'E+02')} - ${num2.toExponential(6).toUpperCase().replace('E+1', 'E+01')}`);
console.log(`${num1.toFixed(3)} - ${num2.toFixed(3)}`);
console.log(`${num1.toFixed(3)} - ${num2.toFixed(3)}`);