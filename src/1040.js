const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

const notas = lines.shift().split(' ').map(num => Number(num));

const n1 = notas[0];
const n2 = notas[1];
const n3 = notas[2];
const n4 = notas[3];

const media = ((n1 * 2) + (n2 * 3) + (n3 * 4) + (n4 * 1)) / 10;

console.log(`Media: ${media.toFixed(1)}`);
if (media >= 7) {
    console.log('Aluno aprovado.');
} else if (media < 5) {
    console.log('Aluno reprovado.');
} else {
    const nExame = Number(lines.pop());
    console.log('Aluno em exame.');
    console.log(`Nota do exame: ${nExame.toFixed(1)}`);
    const media2 = (nExame + media) / 2;
    if (media2 >= 5) {
        console.log('Aluno aprovado.');
    } else {
        console.log('Aluno reprovado.'); 
    }
    console.log(`Media final: ${media2.toFixed(1)}`);
}