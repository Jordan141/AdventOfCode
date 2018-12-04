const fs = require('fs')

const inputsList = fs.readFileSync('./input.txt', 'utf-8')
const inputs = inputsList.split(/\n/g)
const initialFrequency = 0

let currentFrequency = initialFrequency

const seen = {}

while(true){
    for (const input of inputs) {
        currentFrequency += Number(input);
        if (seen[currentFrequency]) {
            return console.log(currentFrequency);
        }
        seen[currentFrequency] = true;
    }
}

