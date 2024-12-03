const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

function dateString(date) {
    const year = date.getUTCFullYear();
    const month = String(date.getUTCMonth() + 1).padStart(2, '0');
    const day = String(date.getUTCDate()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
}

const N = Number(lines[0]);

const yearsJupiter = 11.9;
const yearsSaturn = 29.6;
const startDate = "2020-12-21";
const daysJupiter = yearsJupiter * N * 365.25;
const daysSaturn = yearsSaturn * N * 365.25;
const finalDateJupiter = new Date(startDate);
finalDateJupiter.setDate(finalDateJupiter.getDate() + daysJupiter);
const finalDateSaturn = new Date(startDate);
finalDateSaturn.setDate(finalDateSaturn.getDate() + daysSaturn);

console.log("Dias terrestres para Jupiter = " + Math.floor(daysJupiter));
console.log("Data terrestre para Jupiter: " + dateString(finalDateJupiter));
console.log("Dias terrestres para Saturno = " + Math.floor(daysSaturn));
console.log("Data terrestre para Saturno: " + dateString(finalDateSaturn));