const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

const getAccess = (password) => password !== 2002 ? "Senha invalida" : "Acesso permitido";

let arr = [];
let str = '';

while (str = lines.shift()) {
    arr = str.split(' ');
    let pass = Number(arr[0]);

    console.log(getAccess(pass));
}