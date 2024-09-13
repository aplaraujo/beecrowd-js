const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

const arr = lines.map(el => el.replace('\r', ''));

let tipo1 = arr[0];
let tipo2 = arr[1];
let tipo3 = arr[2];
 
if (tipo1 === "vertebrado" && tipo2 === "ave" && tipo3 === "carnivoro") {
		console.log("aguia");
} else if (tipo1 === "vertebrado" && tipo2 === "ave" && tipo3 === "onivoro") {
		console.log("pomba");
} else if (tipo1 === "vertebrado" && tipo2 === "mamifero" && tipo3 === "onivoro") {
		console.log("homem");
} else if (tipo1 === "vertebrado" && tipo2 === "mamifero" && tipo3 === "herbivoro") {
		console.log("vaca");
} else if (tipo1 === "invertebrado" && tipo2 === "inseto" && tipo3 === "hematofago") {
		console.log("pulga");
} else if (tipo1 === "invertebrado" && tipo2 === "inseto" && tipo3 === "herbivoro") {
		console.log("lagarta");
} else if (tipo1 === "invertebrado" && tipo2 === "anelideo" && tipo3 === "hematofago") {
		console.log("sanguessuga");
} else if (tipo1 === "invertebrado" && tipo2 === "anelideo" && tipo3 === "onivoro") {
		console.log("minhoca");
}