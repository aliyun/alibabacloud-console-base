const fs = require('fs-extra')
const path = require('path')
const cons = require('../cons')

const targetPath = path.join(cons.cwd, cons.FILE_NAMES.def_config)

function getABC() {
  try {
    const abcObj = fs.readJsonSync(targetPath)
    return abcObj
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err)
    process.exit(1)
  }
}

module.exports = getABC
