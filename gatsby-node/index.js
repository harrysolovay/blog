require = require('esm')(module)

const {default: onCreateNode} = require('./onCreateNode')
const {default: createPages} = require('./createPages')

module.exports = {
  createPages,
  onCreateNode,
}
