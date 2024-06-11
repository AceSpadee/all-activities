const colors = require('colors')

const name = process.argv[2]
const profit = process.argv[3]

if (profit > 0) {
    console.log(`My name is ${name.brightYellow} and i made ${profit.brightGreen} dollars this quarter.`)
  } else {
    console.log(`My name is ${name.brightYellow} and i made ${profit.brightRed} dollars this quarter.`)
  }
