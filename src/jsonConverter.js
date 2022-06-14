const fs = require('fs')
const arrayJson = JSON.parse(fs.readFileSync('./data.json'))

module.exports = arrayJson