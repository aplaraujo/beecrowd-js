const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

let pass;

do {
    let line = lines.shift().split(' ');
    pass = Number(line[0]);
    
    if (pass !== 2002) {
        console.log("Senha Invalida");
    } else {
        console.log("Acesso Permitido");
    }
    
} while (pass !== 2002);