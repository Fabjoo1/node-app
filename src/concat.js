const appArray = require('./appArray')
const jsonArray = require('./jsonConverter')
const lodash = require('lodash')

const concatedArray = lodash.concat(appArray,jsonArray.data)

module.exports = concatedArray