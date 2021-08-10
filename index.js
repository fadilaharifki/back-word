let comman = process.argv[2]
let wordBack = ''

for (let i = comman.length-1; i >= 0; i--) {
    wordBack += comman[i];
}

console.log(wordBack); 