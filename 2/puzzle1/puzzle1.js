const fs = require('fs')

const inputsList = fs.readFileSync('./inputs.txt', 'utf-8')
const inputs = inputsList.split(/\n/g).map(x => x.trim())

let appearedTwice = inputs.reduce((sum, acc) => {
    if(letterCounter(acc, 2)) return sum + 1
    return sum
}, 0)
let appearedThrice = inputs.reduce((sum, acc) => {
    if(letterCounter(acc, 3)) return sum + 1
    return sum
}, 0)


function letterCounter(str, amount){
    let counts = {};
    let ch, index, len, count;

    for (index = 0, len = str.length; index < len; ++index) {
        ch = str.charAt(index);
        count = counts[ch];
        counts[ch] = count ? count + 1 : 1;
    }

    return !!getKeyByValue(counts, amount)
}

function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
}

const result = appearedThrice * appearedTwice


