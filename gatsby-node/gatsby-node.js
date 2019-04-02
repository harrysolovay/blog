require = require('esm')(module)
const {join} = require('path')
const lifeCyclePath = join(__dirname, 'gatsby')
const {default: lifeCycle} = require(lifeCyclePath)
module.exports = lifeCycle
