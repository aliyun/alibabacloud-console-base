const fs = require('fs-extra')
const path = require('path')
const { cwd } = require('../cons')

function isTypescript() {
  return fs.pathExistsSync(path.join(cwd, 'tsconfig.json'))
}

module.exports = isTypescript
