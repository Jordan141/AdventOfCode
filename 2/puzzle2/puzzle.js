const fs = require('fs')

const inputsList = fs.readFileSync('./inputs.txt', 'utf-8')
const inputs = inputsList.split(/\n/g).map(x => x.trim())

for (let i = 0; i < inputs.length; i++) {
	for (let j = i + 1; j < inputs.length; j++) {
		const charsI = [...inputs[i]]
		const charsJ = [...inputs[j]]

		let diff = charsI.reduce((a, c, i) => a + (c === charsJ[i] ? 0 : 1), 0)

		if (diff === 1) {
			console.log(inputs[i])
			console.log(inputs[j])
		}
	}
}

