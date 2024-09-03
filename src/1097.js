let i = 1;
let j = 7;

while(i < 10) {
    console.log(`I=${i} J=${j}`)
    j = j - 1;
    console.log(`I=${i} J=${j}`)
    j = j - 1;
    console.log(`I=${i} J=${j}`)
    j = j + 4;
    i = i + 2;
}