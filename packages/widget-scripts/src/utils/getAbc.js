const fs = require('fs-extra')
const path = require('path')
const cons = require('../cons')

const targetPath = path.join(cons.cwd, cons.def_config_file)

function getABC() {
  try {
    const abcObj = fs.readJsonSync(targetPath)
    return abcObj
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

module.exports = getABC
