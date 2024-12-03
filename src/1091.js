const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

function nlogoniaDivision(m, n, x, y) {
    if(x === n || x === m || y === n || y === m) {
        console.log("divisa");
    } else if (x < n && y > m) {
        console.log("NO");
    } else if (x > n && y > m) {
        console.log("NE");
    } else if (x > n && y < m) {
        console.log("SE");
    } else if (x < n && y < m) {
        console.log("SO");
    }
}

let K = Number(lines.shift());
// for (let i = 0; i < lines.length; i++) {
//     while(K > 0) {
//         let [M, N] = lines[0].split(' ').map(Number); 
//         for (let i = 0; i < K; i++) {
//             let line = lines[i].split(' ').map(Number)
//             let X = line[0];
//             let Y = line[1];
//             nlogoniaDivision(M, N, X, Y);
//         }
//         K = Number(lines.shift());
//     }
// }
    
