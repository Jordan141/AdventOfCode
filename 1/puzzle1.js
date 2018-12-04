const fs = require('fs')

const inputsList = fs.readFileSync('./input.txt', 'utf-8')
const inputs = inputsList.split('\n').map(input => input.trim()) //Remove /r
const initialFrequency = 0

let currentFrequency = initialFrequency

inputs.forEach(input => {
    if(input[0] === '+')
        return addFrequency(input)

    return subtractFrequency(input)
})

function addFrequency(value){
    const frequency = Number(value.substring(1))
    currentFrequency += frequency
}

function subtractFrequency(value){
    const frequency = Number(value.substring(1))
    currentFrequency -= frequency
}

console.log(currentFrequency)